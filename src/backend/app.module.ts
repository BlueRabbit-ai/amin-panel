import { Module } from "@nestjs/common"
import { GraphQLModule } from "@nestjs/graphql"
import { ScheduleModule } from "@nestjs/schedule"
import { PrismaService } from "./prisma.service"
import { UserModule } from "./user/user.module"
import { AuthModule } from "./auth/auth.module"
import { CronService } from "./cron/cron.service"

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
      installSubscriptionHandlers: true,
    }),
    ScheduleModule.forRoot(),
    UserModule,
    AuthModule,
  ],
  providers: [PrismaService, CronService],
})
export class AppModule {}

