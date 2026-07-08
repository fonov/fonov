import type { TestName } from '@/data/schemeOfTests';

export const URLS: Record<string, string> = {
  Home: '/',
  About: '/about',
  Appearance: '/appearance',
  WaterSensor: '/water_sensor',
  IMEI: '/imei',
  ButtonsAndVibration: '/buttons_and_vibration',
  Sensor: '/sensor',
  Touch3D: '/3d_touch',
  iCloud: '/icloud',
  Flash: '/flash',
  Speaker: '/speaker',
  CompassAndGsensor: '/compass_and_gsensor',
  Camera: '/camera',
  HeadphoneJack: '/headphone_jack',
  TouchIDorFaceID: '/touch_id_or_face_id',
  WiFi: '/wifi',
  Bluetooth: '/bluetooth',
  Microphone: '/microphone',
  CallAndProximitySensor: '/call_and_proximity_sensor',
  Charging: '/charging',
  Warranty: '/warranty',
  Package: '/package',
  BatteryHealth: '/battery_health',
  USBC: '/usbc',
  MagSafe: '/magsafe',
  ActionButton: '/action_button',
  CenterStage: '/center_stage',
  PartsAuthenticity: '/parts_authenticity',
  Hinge: '/hinge',
  Crease: '/crease',
  CoverDisplay: '/cover_display',
  InnerDisplay: '/inner_display',
  TouchIDButton: '/touch_id_button',
  TestResult: '/test_result',
  Feedback: '/feedback',
  QuickCheck: '/quick_check',
  Guide: '/guide',
};

export function getPathForTest(test: TestName): string {
  return URLS[test] ?? '/';
}

export function getTestFromPath(path: string): TestName | null {
  const entry = Object.entries(URLS).find(([, p]) => p === path);
  return entry ? (entry[0] as TestName) : null;
}
