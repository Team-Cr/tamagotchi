export enum HealthState {
  HEALTH_0 = 0,
  HEALTH_25 = 1,
  HEALTH_50 = 2,
  HEALTH_75 = 3,
}

const messages: Record<HealthState, string> = {
  [HealthState.HEALTH_0]: "You forgot about me completely. I'm leaving.",
  [HealthState.HEALTH_25]: "I miss you, don't forget me.",
  [HealthState.HEALTH_50]: "Let's play together!",
  [HealthState.HEALTH_75]: "I'm hungry. I wouldn't say no to a couple of fish!",
};

export const getHealthNotificationOptions = (healthState: HealthState): NotificationOptions => {
  return {
    body: messages[healthState],
    tag: `health-state-${healthState}`,
  };
};
