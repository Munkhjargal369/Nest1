import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ReportService } from './report.service'; // Make sure to import the ReportService

@Module({
  controllers: [ReportController],
  providers: [ReportService], // Add the ReportService as a provider
  exports: [ReportService]
})
export class ReportModule {}
