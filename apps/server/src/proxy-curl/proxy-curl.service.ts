import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { PrismaService } from '../prisma/prisma.service';
import { map, catchError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { type SearchProxyCurlDto } from './dto/search-proxy-curl.dto';

@Injectable()
export class ProxyCurlService {
  constructor(
    private readonly http: HttpService,
    private readonly prisma: PrismaService,
  ) {}

  search(searchParams: SearchProxyCurlDto) {
    const url = 'https://nubela.co/proxycurl/api/search/person/';
    const headers = { Authorization: 'Bearer xX3lfD4060k_S3IXvSE3Vw' };
    const params = { ...searchParams, enrich_profiles: 'enrich' };

    console.log('Authorization header:', headers['Authorization']);
    console.log(params);

    return this.http.get(url, { headers: headers, params: params }).pipe(
      tap((response) => console.log(response)),
      map((response) => response.data),
      catchError((error) => {
        console.error('Error:', error);
        return throwError(() => error);
      }),
    );
  }

  // async saveProfiles(profiles: any) {
  //   this.prisma
  //     .$connect()
  //     .then(async () => {
  //       // convert file to js object

  //       const parsedData = JSON.parse(profiles);
  //       // console.log(parsedResults.results.map((item: any) => item.profile));

  //       // loop and log all profiles in the array
  //       for (const data of parsedData.results) {
  //         // console.log(formatProfileData(data.profile));
  //         try {
  //           const user = await this.prisma.profile.create({
  //             data: formatProfileData(data.profile),
  //             include: {
  //               experiences: true,
  //               educations: true,
  //               accomplishment_courses: true,
  //               accomplishment_honors_awards: true,
  //               accomplishment_organisations: true,
  //               accomplishment_patents: true,
  //               accomplishment_projects: true,
  //               accomplishment_publications: true,
  //               accomplishment_test_scores: true,
  //               activities: true,
  //               articles: true,
  //               certifications: true,
  //               groups: true,
  //               languages: true,
  //               people_also_viewed: true,
  //               similarly_named_profiles: true,
  //               volunteer_work: true,
  //             },
  //           });
  //           console.log(user);
  //         } catch (error) {
  //           throw error;
  //         }
  //       }
  //     })
  //     .finally(() => {
  //       this.prisma.$disconnect();
  //     });
  // }

  // async findUser() {
  //   try {
  //     const users = await this.prisma.profile.findMany();

  //     return users;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  async cleanDb() {
    Promise.all([
      await this.prisma.$connect(),
      await this.prisma.experience.deleteMany(),
      await this.prisma.education.deleteMany(),
      await this.prisma.honourAward.deleteMany(),
      await this.prisma.accomplishmentOrg.deleteMany(),
      await this.prisma.activity.deleteMany(),
      await this.prisma.course.deleteMany(),
      await this.prisma.group.deleteMany(),
      await this.prisma.honourAward.deleteMany(),
      await this.prisma.language.deleteMany(),
      await this.prisma.patent.deleteMany(),
      await this.prisma.peopleAlsoViewed.deleteMany(),
      await this.prisma.project.deleteMany(),
      await this.prisma.publication.deleteMany(),
      await this.prisma.similarProfile.deleteMany(),
      await this.prisma.testScore.deleteMany(),
      await this.prisma.volunteerWork.deleteMany(),
      await this.prisma.certification.deleteMany(),
      await this.prisma.profile.deleteMany(),
      await this.prisma.$disconnect(),
    ]);
  }
}
