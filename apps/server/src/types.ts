type ExperienceInput = {
  company: string;
  title: string;
  description: string;
  location: string;
  starts_at: Date;
  ends_at: Date;
  company_linkedin_profile_url: string;
  logo_url: string;
};

type EducationInput = {
  school: string;
  degree_name: string;
  field_of_study: string;
  starts_at: Date;
  ends_at: Date;
  description: string;
  activities_and_societies: string;
  grade: string;
  logo_url: string;
  school_linkedin_profile_url: string;
};

type ActivityInput = {
  activityStatus: string | null;
  link: string | null;
  title: string | null;
};

type ArticleInput = {
  title: string | null;
  link: string | null;
  publishedDate: string | null;
  author: string | null;
  imageUrl: string | null;
};

type CertificationInput = {
  authority: string | null;
  displaySource: string | null;
  endsAt: string | null;
  licenseNumber: string | null;
  name: string | null;
  startsAt: string | null;
  url: string | null;
};

type GroupInput = {
  profilePicUrl: string | null;
  name: string | null;
  url: string | null;
};

type LanguageInput = {
  language: string;
};

type PeopleAlsoViewedInput = {
  link: string | null;
  name: string | null;
  summary: string | null;
  location: string | null;
};

type SimilarlyNamedProfilesInput = {
  name: string | null;
  link: string | null;
  summary: string | null;
  location: string | null;
};

type VolunteerWorkInput = {
  cause: string | null;
  company: string | null;
  companyLinkedinProfileUrl: string | null;
  description: string | null;
  endsAt: string | null;
  logoUrl: string | null;
  startsAt: string | null;
  title: string | null;
};

export type ProfileInput = {
  linkedin_profile_url: string;
  last_updated: string;
  public_identifier: string;
  first_name: string;
  last_name: string;
  full_name: string;
  city: string;
  state: string;
  country: string;
  country_full_name: string;
  summary: string;
  profile_pic_url: string;
  background_cover_image_url: string;
  headline: string;
  occupation: string;
  connections: number;
  follower_count: number;
  experiences: {
    create: ExperienceInput[];
  };
  education: {
    create: EducationInput[];
  };

  accomplishment_courses: { create: string[] };
  accomplishment_honors_awards: { create: string[] };
  accomplishment_organisations: { create: string[] };
  accomplishment_patents: { create: string[] };
  accomplishment_projects: { create: string[] };
  accomplishment_publications: { create: string[] };
  accomplishment_test_scores: { create: string[] };
  activities: {
    create: ActivityInput[];
  };
  articles: {
    create: ArticleInput[];
  };
  certifications: {
    create: CertificationInput[];
  };
  groups: {
    create: GroupInput[];
  };
  languages: {
    create: LanguageInput[];
  };
  people_also_viewed: {
    create: PeopleAlsoViewedInput[];
  };
  recommendations: string[];
  similarly_named_profiles: {
    create: SimilarlyNamedProfilesInput[];
  };
  skills: string[];
  volunteer_work: {
    create: VolunteerWorkInput[];
  };
};

export type SelectedProfile = {
  profile: ProfileInput;
  linkedin_profile_url: string;
  last_updated: string;
};
