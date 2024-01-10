import {
  IsString,
  IsOptional,
  IsUrl,
  IsDateString,
  IsNumber,
} from 'class-validator';

export class SearchProxyCurlDto {
  @IsString()
  country: string;

  @IsOptional()
  @IsString()
  first_name: string;

  @IsOptional()
  @IsString()
  last_name: string;

  @IsOptional()
  @IsString()
  education_field_of_study: string;

  @IsOptional()
  @IsString()
  education_degree_name: string;

  @IsOptional()
  @IsString()
  education_school_name: string;

  @IsUrl()
  @IsOptional()
  education_school_linkedin_profile_url?: string;

  @IsOptional()
  @IsString()
  current_role_title: string;

  @IsOptional()
  @IsString()
  past_role_title: string;

  @IsOptional()
  @IsDateString()
  current_role_before: string;

  @IsOptional()
  @IsDateString()
  current_role_after: string;

  @IsUrl()
  @IsOptional()
  current_company_linkedin_profile_url?: string;

  @IsUrl()
  @IsOptional()
  past_company_linkedin_profile_url?: string;

  @IsOptional()
  @IsString()
  current_job_description: string;

  @IsOptional()
  @IsString()
  past_job_description: string;

  @IsOptional()
  @IsString()
  current_company_name: string;

  @IsOptional()
  @IsString()
  past_company_name: string;

  @IsOptional()
  @IsString()
  linkedin_groups: string;

  @IsOptional()
  @IsString()
  languages: string;

  @IsOptional()
  @IsString()
  region: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  headline: string;

  @IsOptional()
  @IsString()
  summary: string;

  @IsOptional()
  @IsString()
  industries: string;

  @IsOptional()
  @IsString()
  interests: string;

  @IsOptional()
  @IsString()
  skills: string;

  @IsOptional()
  @IsString()
  current_company_country: string;

  @IsOptional()
  @IsString()
  current_company_region: string;

  @IsOptional()
  @IsString()
  current_company_city: string;

  @IsOptional()
  @IsString()
  current_company_type: string;

  @IsOptional()
  @IsNumber()
  current_company_follower_count_min: number;

  @IsOptional()
  @IsNumber()
  current_company_follower_count_max: number;

  @IsOptional()
  @IsString()
  current_company_industry: string;

  @IsOptional()
  @IsNumber()
  current_company_employee_count_min: number;

  @IsOptional()
  @IsNumber()
  current_company_employee_count_max: number;

  @IsOptional()
  @IsString()
  current_company_description: string;

  @IsOptional()
  @IsDateString()
  current_company_founded_after_year: string;

  @IsOptional()
  @IsDateString()
  current_company_founded_before_year: string;

  @IsOptional()
  @IsNumber()
  current_company_funding_amount_min: number;

  @IsOptional()
  @IsNumber()
  current_company_funding_amount_max: number;

  @IsOptional()
  @IsDateString()
  current_company_funding_raised_after: string;

  @IsOptional()
  @IsDateString()
  current_company_funding_raised_before: string;

  @IsOptional()
  @IsString()
  public_identifier_in_list: string;

  @IsOptional()
  @IsString()
  public_identifier_not_in_list: string;

  @IsOptional()
  @IsNumber()
  page_size: number;
}
