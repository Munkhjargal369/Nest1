import { Injectable } from '@nestjs/common';
import { ReportType } from 'src/data';
import { ReportService } from 'src/report/report.service';

@Injectable()
export class SummaryService {
    constructor(private readonly reportService:ReportService ){}
    calculateSummary() {
        const allExpence = this.reportService.getAllReport(ReportType.EXPENCE).reduce((sum, report) => sum + report.amount, 0);
        const allIncome = this.reportService.getAllReport(ReportType.INCOME).reduce((sum , report) => sum + report.amount, 0);
        return {
            totolIncome: allIncome,
            totalExpences: allExpence,
            netIncome: allExpence - allIncome,
        }
    }
}
