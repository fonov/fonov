import type { TestName } from '@/data/schemeOfTests';

export interface TestConfig {
  titleKey: string;
  ratingType: 'check' | 'stars' | 'none';
  revertColor?: boolean;
  imageCount?: number;
  cardHeaderKey?: string;
  cardBodyKey?: string;
  pass?: boolean;
  weight: number;
  warningKey?: string;
}

export const TEST_CONFIGS: Partial<Record<TestName, TestConfig>> = {
  About: {
    titleKey: 'о_iphone',
    ratingType: 'check',
    pass: true,
    weight: -100,
    warningKey: '1_information_about_phone_d...',
    imageCount: 2,
  },
  Appearance: {
    titleKey: '2_the_appearance_of_the_iph...',
    ratingType: 'stars',
    weight: 7.5,
  },
  WaterSensor: {
    titleKey: 'moisture_indicator',
    ratingType: 'check',
    revertColor: true,
    pass: false,
    weight: -100,
    warningKey: '4_we_do_not_recommend_buyin...',
    cardHeaderKey: 'moisture_has_a_devastatin...',
    imageCount: 1,
  },
  IMEI: {
    titleKey: 'coincidence_imei',
    ratingType: 'stars',
    weight: 5,
    imageCount: 1,
  },
  ButtonsAndVibration: {
    titleKey: 'buttons_and_vibration',
    ratingType: 'check',
    weight: -100,
    warningKey: '6_we_do_not_recommend_buyin...',
    imageCount: 2,
  },
  Sensor: {
    titleKey: 'sensor',
    ratingType: 'check',
    weight: -100,
    warningKey: '8_we_do_not_recommend_buyin...',
    imageCount: 1,
  },
  Touch3D: {
    titleKey: '3d_touch',
    ratingType: 'check',
    weight: -100,
    warningKey: '10_we_do_not_recommend_buyin...',
    imageCount: 1,
  },
  iCloud: {
    titleKey: 'icloud',
    ratingType: 'check',
    weight: -100,
    warningKey: '12_we_strongly_recommend_you...',
    imageCount: 2,
  },
  Flash: {
    titleKey: 'flash',
    ratingType: 'check',
    weight: -100,
    warningKey: '14_we_do_not_recommend_buyin...',
    imageCount: 1,
  },
  Speaker: {
    titleKey: 'dynamics',
    ratingType: 'check',
    weight: -100,
    warningKey: '16_we_do_not_recommend_buyin...',
    imageCount: 1,
  },
  CompassAndGsensor: {
    titleKey: 'compass_and_g-sensor',
    ratingType: 'check',
    weight: -100,
    warningKey: '18_we_do_not_recommend_buyin...',
    imageCount: 2,
  },
  Camera: {
    titleKey: 'camera',
    ratingType: 'check',
    weight: -100,
    warningKey: '20_we_do_not_recommend_buyin...',
    imageCount: 2,
  },
  HeadphoneJack: {
    titleKey: 'headphone_jack',
    ratingType: 'check',
    weight: -100,
    warningKey: '22_we_do_not_recommend_buyin...',
    imageCount: 1,
  },
  TouchIDorFaceID: {
    titleKey: 'touch_id_or_face_id',
    ratingType: 'check',
    weight: -100,
    warningKey: '23_we_do_not_recommend_buyin...',
    imageCount: 1,
  },
  WiFi: {
    titleKey: 'wi-fi',
    ratingType: 'check',
    weight: -100,
    warningKey: '25_we_do_not_recommend_buyin...',
    imageCount: 1,
  },
  Bluetooth: {
    titleKey: 'bluetooth',
    ratingType: 'check',
    weight: -100,
    warningKey: '27_we_do_not_recommend_buyin...',
    imageCount: 1,
  },
  Microphone: {
    titleKey: 'microphone',
    ratingType: 'check',
    weight: -100,
    warningKey: '29_we_do_not_recommend_buyin...',
    imageCount: 1,
  },
  CallAndProximitySensor: {
    titleKey: 'call_and_proximity_sensor',
    ratingType: 'check',
    weight: -100,
    warningKey: '31_we_do_not_recommend_buyin...',
    imageCount: 1,
  },
  Charging: {
    titleKey: 'charging',
    ratingType: 'check',
    weight: -100,
    warningKey: '33_we_do_not_recommend_buyin...',
    imageCount: 1,
  },
  Warranty: {
    titleKey: 'guarantee',
    ratingType: 'stars',
    weight: 5,
    imageCount: 1,
  },
  Package: {
    titleKey: 'equipment',
    ratingType: 'stars',
    weight: 5,
    imageCount: 1,
  },
  BatteryHealth: {
    titleKey: 'battery_health',
    ratingType: 'check',
    weight: -100,
    warningKey: 'battery_health_warning',
    cardHeaderKey: 'battery_health_header',
    imageCount: 1,
  },
  USBC: {
    titleKey: 'usbc_port',
    ratingType: 'check',
    weight: -100,
    warningKey: 'usbc_warning',
    cardHeaderKey: 'usbc_header',
    imageCount: 1,
  },
  MagSafe: {
    titleKey: 'magsafe',
    ratingType: 'check',
    weight: -50,
    warningKey: 'magsafe_warning',
    imageCount: 1,
  },
  ActionButton: {
    titleKey: 'action_button',
    ratingType: 'check',
    weight: -50,
    warningKey: 'action_button_warning',
    imageCount: 1,
  },
  CenterStage: {
    titleKey: 'center_stage',
    ratingType: 'check',
    weight: -50,
    warningKey: 'center_stage_warning',
    imageCount: 1,
  },
  PartsAuthenticity: {
    titleKey: 'parts_authenticity',
    ratingType: 'check',
    weight: -100,
    warningKey: 'parts_authenticity_warning',
    imageCount: 1,
  },
  Hinge: {
    titleKey: 'hinge_test',
    ratingType: 'check',
    weight: -100,
    warningKey: 'hinge_warning',
    imageCount: 2,
  },
  Crease: {
    titleKey: 'crease_test',
    ratingType: 'check',
    weight: -100,
    warningKey: 'crease_warning',
    imageCount: 1,
  },
  CoverDisplay: {
    titleKey: 'cover_display_test',
    ratingType: 'check',
    weight: -100,
    warningKey: 'cover_display_warning',
    imageCount: 1,
  },
  InnerDisplay: {
    titleKey: 'inner_display_test',
    ratingType: 'check',
    weight: -100,
    warningKey: 'inner_display_warning',
    imageCount: 1,
  },
  TouchIDButton: {
    titleKey: 'touch_id_button_test',
    ratingType: 'check',
    weight: -100,
    warningKey: 'touch_id_button_warning',
    imageCount: 1,
  },
};

export function calculateScore(
  ratings: Record<string, { check?: boolean; firstStars?: number; secondStars?: number }>
): number {
  let rank = 0;
  for (const [key, value] of Object.entries(ratings)) {
    const config = TEST_CONFIGS[key as TestName];
    if (!config) continue;

    if (typeof value.check === 'boolean') {
      const expected = config.pass ?? true;
      if (value.check !== expected) rank += config.weight;
    } else if (
      typeof value.firstStars === 'number' &&
      typeof value.secondStars === 'number'
    ) {
      if (value.firstStars > value.secondStars) {
        rank += (value.firstStars - value.secondStars) * config.weight;
      }
    }
  }
  return rank;
}

export function getConclusion(
  rank: number,
  model: string,
  t: (key: string, opts?: Record<string, string>) => string
) {
  if (rank < 0) {
    return {
      type: 'danger' as const,
      title: t('0_{currentmodel}_is_not_re...', { currentModel: model }),
      text: t('1_{currentmodel}_contains_...', { currentModel: model }),
    };
  }
  if (rank === 0) {
    return {
      type: 'success' as const,
      title: t('2_{currentmodel}_recommend...', { currentModel: model }),
      text: t('3_{currentmodel}_is_fully_...', { currentModel: model }),
    };
  }
  if (rank <= 10) {
    return {
      type: 'success' as const,
      title: t('4_{currentmodel}_recommend...', { currentModel: model }),
      text: t('5_{currentmodel}_has_minor...', { currentModel: model }),
    };
  }
  if (rank <= 20) {
    return {
      type: 'warning' as const,
      title: t('6_{currentmodel}_recommend...', { currentModel: model }),
      text: t('7_{currentmodel}_has_minor...', { currentModel: model }),
    };
  }
  if (rank <= 25) {
    return {
      type: 'warning' as const,
      title: t('8_{currentmodel}_recommend...', { currentModel: model }),
      text: t('9_{currentmodel}_has_minor...', { currentModel: model }),
    };
  }
  return {
    type: 'warning' as const,
    title: t('10_{currentmodel}_recommend...', { currentModel: model }),
    text: t('11_{currentmodel}_has_flaws...', { currentModel: model }),
  };
}
