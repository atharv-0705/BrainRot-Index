// These lists mirror the Literal[...] values in the backend's StudentData model exactly.
// Do not rename these — the labels double as the payload values sent to /predict.

export const GENDER_OPTIONS = ['Male', 'Female']

// Matches `top_countries` in main.py. Anything else is grouped into "Other" server-side,
// so this list is the full set the backend actually distinguishes between.
export const COUNTRY_OPTIONS = [
  'India',
  'USA',
  'Canada',
  'Australia',
  'UK',
  'Germany',
  'Mexico',
  'Turkey',
  'France',
  'Other',
]

export const ACADEMIC_LEVEL_OPTIONS = ['High School', 'Undergraduate', 'Graduate']

export const PLATFORM_OPTIONS = [
  'Instagram',
  'YouTube',
  'TikTok',
  'Facebook',
  'WhatsApp',
  'Snapchat',
  'Twitter',
  'LinkedIn',
  'WeChat',
  'LINE',
  'KakaoTalk',
  'VKontakte',
]

export const PURPOSE_OPTIONS = ['Networking', 'Education', 'Entertainment', 'News']

export const STRESS_LEVEL_OPTIONS = ['Low', 'Medium', 'High', 'Very High']
