import { describe, it, expect } from 'vitest';
import { getModelByCode, getAllModels } from '@/data/models';
import { getSchemeForModel, testForRemove } from '@/data/schemeOfTests';
import { calculateScore } from '@/data/testConfigs';

describe('model database', () => {
  it('loads legacy and modern models', () => {
    const models = getAllModels();
    expect(models.length).toBeGreaterThan(40);
    expect(models.some((m) => m.name === 'iPhone X')).toBe(true);
    expect(models.some((m) => m.name === 'iPhone 17')).toBe(true);
  });

  it('resolves model by code', () => {
    const result = getModelByCode('A2482');
    expect(result).not.toBeNull();
    expect(result?.model.name).toBe('iPhone 13');
  });
});

describe('schemeOfTests', () => {
  it('removes Touch3D for iPhone 11', () => {
    const scheme = getSchemeForModel('iPhone 11');
    expect(scheme).not.toContain('Touch3D');
  });

  it('includes foldable tests for fold form factor', () => {
    const scheme = getSchemeForModel('iPhone Fold', 'foldable');
    expect(scheme).toContain('Hinge');
    expect(scheme).not.toContain('TouchIDorFaceID');
  });

  it('fixes iCloud typo in legacy removals', () => {
    const removals = testForRemove('iPhone');
    expect(removals).toContain('iCloud');
    expect(removals).not.toContain('iCloid');
  });
});

describe('scoring', () => {
  it('calculates negative score for critical failures', () => {
    const rank = calculateScore({
      iCloud: { check: false },
      WaterSensor: { check: true },
    });
    expect(rank).toBeLessThan(0);
  });
});
