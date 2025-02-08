import { Injectable } from "@nestjs/common"
import { Cron } from "@nestjs/schedule"

@Injectable()
export class CronService {
  @Cron("0 0 * * *") // Runs every day at midnight
  async handleDailyTasks() {
    console.log("Running daily tasks...")
    // Implement your daily tasks here
  }

  @Cron("0 * * * *") // Runs every hour
  async handleHourlyTasks() {
    console.log("Running hourly tasks...")
    // Implement your hourly tasks here
  }
}

