import type { FormFactor } from './models/schema';
import { getAllModels } from './models';

export const MODERN_TESTS = [
  'BatteryHealth',
  'USBC',
  'MagSafe',
  'ActionButton',
  'CenterStage',
  'PartsAuthenticity',
] as const;

export const FULL_TEST_LIST = [
  'About',
  'Appearance',
  'WaterSensor',
  'IMEI',
  'ButtonsAndVibration',
  'Sensor',
  'Touch3D',
  'iCloud',
  'Flash',
  'Speaker',
  'CompassAndGsensor',
  'Camera',
  'HeadphoneJack',
  'TouchIDorFaceID',
  'WiFi',
  'Bluetooth',
  'Microphone',
  'CallAndProximitySensor',
  'Charging',
  'Warranty',
  'Package',
  ...MODERN_TESTS,
] as const;

export const FOLDABLE_ONLY_TESTS = [
  'Hinge',
  'Crease',
  'CoverDisplay',
  'InnerDisplay',
  'TouchIDButton',
] as const;

export type TestName =
  | (typeof FULL_TEST_LIST)[number]
  | (typeof FOLDABLE_ONLY_TESTS)[number];

const FEATURE_TEST_MAP: Record<string, TestName> = {
  batteryHealth: 'BatteryHealth',
  usbC: 'USBC',
  magSafe: 'MagSafe',
  actionButton: 'ActionButton',
  centerStage: 'CenterStage',
  partsAuthenticity: 'PartsAuthenticity',
};

function getFeatureTests(model: ReturnType<typeof getAllModels>[number]): TestName[] {
  const tests: TestName[] = [];
  const gen = parseInt(model.generation, 10);

  for (const feature of model.features) {
    const mapped = FEATURE_TEST_MAP[feature];
    if (mapped) tests.push(mapped);
  }

  if (model.portType === 'usbc' && !tests.includes('USBC')) {
    tests.push('USBC');
  }

  if (!Number.isNaN(gen) && gen >= 11) {
    if (!tests.includes('BatteryHealth')) tests.push('BatteryHealth');
    if (!tests.includes('PartsAuthenticity')) tests.push('PartsAuthenticity');
  }

  if (!Number.isNaN(gen) && gen >= 17) {
    if (!tests.includes('CenterStage')) tests.push('CenterStage');
  }

  return tests;
}

const LEGACY_MODEL_REMOVALS: Record<string, string[]> = {
  iPhone: ['Touch3D', 'Flash', 'TouchIDorFaceID', 'Warranty', 'iCloud'],
  'iPhone 3G': ['Touch3D', 'Flash', 'TouchIDorFaceID', 'Warranty', 'iCloud'],
  'iPhone 3GS': ['Touch3D', 'Flash', 'TouchIDorFaceID', 'Warranty', 'iCloud'],
  'iPhone 4': ['Touch3D', 'TouchIDorFaceID', 'Warranty'],
  'iPhone 4S': ['Touch3D', 'TouchIDorFaceID', 'Warranty'],
  'iPhone 5': ['Touch3D', 'TouchIDorFaceID', 'Warranty'],
  'iPhone 5c': ['Touch3D', 'TouchIDorFaceID', 'Warranty'],
  'iPhone 5s': ['Touch3D'],
  'iPhone 6': ['Touch3D'],
  'iPhone 6 Plus': ['Touch3D'],
  'iPhone SE': ['Touch3D'],
  'iPhone 7': ['HeadphoneJack'],
  'iPhone 7 Plus': ['HeadphoneJack'],
  'iPhone 8': ['HeadphoneJack'],
  'iPhone 8 Plus': ['HeadphoneJack'],
  'iPhone X': ['HeadphoneJack'],
};

const GENERATION_REMOVALS: Record<string, string[]> = {
  '1': ['Touch3D', 'Flash', 'TouchIDorFaceID', 'Warranty', 'iCloud'],
  '3G': ['Touch3D', 'Flash', 'TouchIDorFaceID', 'Warranty', 'iCloud'],
  '3GS': ['Touch3D', 'Flash', 'TouchIDorFaceID', 'Warranty', 'iCloud'],
  '4': ['Touch3D', 'TouchIDorFaceID', 'Warranty'],
  '4S': ['Touch3D', 'TouchIDorFaceID', 'Warranty'],
  '5': ['Touch3D', 'TouchIDorFaceID', 'Warranty'],
  '5c': ['Touch3D', 'TouchIDorFaceID', 'Warranty'],
  '5s': ['Touch3D'],
  '6': ['Touch3D'],
  '6s': [],
  '7': ['HeadphoneJack'],
  '8': ['HeadphoneJack'],
  X: ['HeadphoneJack'],
  '10': ['HeadphoneJack'],
  '11': ['Touch3D', 'HeadphoneJack'],
  SE2: ['Touch3D', 'HeadphoneJack'],
  SE3: ['Touch3D', 'HeadphoneJack'],
  '12': ['Touch3D', 'HeadphoneJack'],
  '13': ['Touch3D', 'HeadphoneJack'],
  '14': ['Touch3D', 'HeadphoneJack'],
  '15': ['Touch3D', 'HeadphoneJack'],
  '16': ['Touch3D', 'HeadphoneJack'],
  '17': ['Touch3D', 'HeadphoneJack'],
  '18': ['Touch3D', 'HeadphoneJack'],
  fold: ['Touch3D', 'HeadphoneJack', 'TouchIDorFaceID'],
};

function unique(values: string[]): string[] {
  return [...new Set(values)];
}

function removeTests(tests: string[], toRemove: string[]): string[] {
  const removals = new Set(toRemove);
  return tests.filter((test) => !removals.has(test));
}

function getGenerationForModel(modelName: string): string | null {
  const model = getAllModels().find((entry) => entry.name === modelName);
  return model ? model.generation : null;
}

export function testForRemove(modelName: string, generation?: string): string[] {
  if (LEGACY_MODEL_REMOVALS[modelName]) {
    return LEGACY_MODEL_REMOVALS[modelName];
  }

  const resolvedGeneration = generation ?? getGenerationForModel(modelName);

  if (!resolvedGeneration) {
    return [];
  }

  if (modelName === 'iPhone XR') {
    return unique([
      ...(GENERATION_REMOVALS['10'] ?? []),
      'Touch3D',
    ]);
  }

  if (modelName === 'iPhone XS' || modelName === 'iPhone XS Max') {
    return GENERATION_REMOVALS['10']?.filter((test) => test !== 'Touch3D') ?? [];
  }

  return GENERATION_REMOVALS[resolvedGeneration] ?? [];
}

export function getFoldableTestScheme(): TestName[] {
  const base = removeTests(
    [...FULL_TEST_LIST],
    testForRemove('iPhone Fold', 'fold'),
  );

  const touchIdIndex = base.indexOf('TouchIDorFaceID');
  if (touchIdIndex !== -1) {
    base.splice(touchIdIndex, 1);
  }

  return [...base, ...FOLDABLE_ONLY_TESTS] as TestName[];
}

export function getSchemeForModel(
  modelName: string,
  formFactor: FormFactor = 'bar',
): TestName[] {
  if (formFactor === 'foldable') {
    return getFoldableTestScheme();
  }

  const model = getAllModels().find((entry) => entry.name === modelName);
  const removals = testForRemove(modelName);
  let scheme = removeTests([...FULL_TEST_LIST], removals) as TestName[];

  if (model) {
    const featureTests = getFeatureTests(model);
    const baseWithoutModern = scheme.filter(
      (t) => !(MODERN_TESTS as readonly string[]).includes(t)
    );
    scheme = [...baseWithoutModern, ...featureTests] as TestName[];
  }

  return scheme;
}

export default getSchemeForModel;
