import { z } from 'zod';

export const FormFactorSchema = z.enum(['bar', 'foldable']);
export const ModelStatusSchema = z.enum(['active', 'placeholder']);
export const BiometricsSchema = z.enum(['touchId', 'faceId', 'touchIdButton']);
export const PortTypeSchema = z.enum(['lightning', 'usbc']);

export const iPhoneModelSchema = z.object({
  name: z.string(),
  generation: z.string(),
  formFactor: FormFactorSchema,
  status: ModelStatusSchema,
  biometrics: BiometricsSchema,
  portType: PortTypeSchema,
  features: z.array(z.string()),
  colors: z.record(z.string(), z.record(z.string(), z.array(z.string()))),
});

export const iPhoneModelArraySchema = z.array(iPhoneModelSchema);

export type FormFactor = z.infer<typeof FormFactorSchema>;
export type ModelStatus = z.infer<typeof ModelStatusSchema>;
export type Biometrics = z.infer<typeof BiometricsSchema>;
export type PortType = z.infer<typeof PortTypeSchema>;
export type iPhoneModel = z.infer<typeof iPhoneModelSchema>;

export type ResolvedModel = {
  model: iPhoneModel;
  color: string;
  capacity: string;
  code: string;
};
