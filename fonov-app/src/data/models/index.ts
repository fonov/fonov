import { ENABLE_IPHONE_18, ENABLE_IPHONE_FOLD } from './featureFlags';
import {
  iPhoneModel,
  iPhoneModelArraySchema,
  ResolvedModel,
} from './schema';

import legacyData from './legacy.json';
import modernData from './modern.json';
import iphone18PlaceholderData from './iphone-18.placeholder.json';
import iphoneFoldPlaceholderData from './iphone-fold.placeholder.json';

const legacyModels = iPhoneModelArraySchema.parse(legacyData);
const modernModels = iPhoneModelArraySchema.parse(modernData);
const iphone18PlaceholderModels = iPhoneModelArraySchema.parse(iphone18PlaceholderData);
const iphoneFoldPlaceholderModels = iPhoneModelArraySchema.parse(iphoneFoldPlaceholderData);

function buildModelCatalog(): iPhoneModel[] {
  const models: iPhoneModel[] = [...legacyModels, ...modernModels];

  if (ENABLE_IPHONE_18) {
    models.push(...iphone18PlaceholderModels);
  }

  if (ENABLE_IPHONE_FOLD) {
    models.push(...iphoneFoldPlaceholderModels);
  }

  return models;
}

let cachedModels: iPhoneModel[] | null = null;

function getCatalog(): iPhoneModel[] {
  if (!cachedModels) {
    cachedModels = buildModelCatalog();
  }
  return cachedModels;
}

export function getAllModels(): iPhoneModel[] {
  return getCatalog();
}

export function getModelByCode(code: string): ResolvedModel | null {
  const normalizedCode = code.trim().toUpperCase();

  for (const model of getCatalog()) {
    for (const [color, capacities] of Object.entries(model.colors)) {
      for (const [capacity, codes] of Object.entries(capacities)) {
        if (codes.some((entry: string) => entry.toUpperCase() === normalizedCode)) {
          return {
            model,
            color,
            capacity,
            code: normalizedCode,
          };
        }
      }
    }
  }

  return null;
}

export function resolveModel(
  name: string,
  color?: string,
  capacity?: string,
): ResolvedModel | iPhoneModel | null {
  const model = getCatalog().find((entry) => entry.name === name);

  if (!model) {
    return null;
  }

  if (!color) {
    return model;
  }

  const capacities = model.colors[color];

  if (!capacities) {
    return null;
  }

  if (!capacity) {
    return model;
  }

  const codes = capacities[capacity];

  if (!codes || codes.length === 0) {
    return null;
  }

  return {
    model,
    color,
    capacity,
    code: codes[0],
  };
}

export {
  ENABLE_IPHONE_18,
  ENABLE_IPHONE_FOLD,
} from './featureFlags';

export type {
  iPhoneModel,
  ResolvedModel,
  FormFactor,
  ModelStatus,
  Biometrics,
  PortType,
} from './schema';
