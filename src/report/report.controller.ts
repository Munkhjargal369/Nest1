import { Controller, Get, Param, Post, Body, Put, Delete ,HttpCode,
    ParseUUIDPipe, ParseEnumPipe } from "@nestjs/common";
import { ReportType } from 'src/data';
import { ReportService } from "./report.service";
import { CreateReportDto , updaterReportDto, ReportResponseDto} from "src/dtos/report.dto";

@Controller('report/:type')
export class ReportController {
    constructor(
        private readonly reportService: ReportService
    ) { }

    @Get('')
    getAllIncomeReports(@Param('type', new ParseEnumPipe(ReportType)) type: string): ReportResponseDto[] {
        const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENCE;
        return this.reportService.getAllReport(reportType);
    }

    @Get('/:id')
    getReportById(@Param('type', new ParseEnumPipe(ReportType)) type: string, @Param('id', ParseUUIDPipe) id: string): ReportResponseDto{
        const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENCE;

        return this.reportService.getReportById(reportType, id);
    }

    @Post()
    createReport(
        @Body() body: CreateReportDto,
        @Param('type', new ParseEnumPipe(ReportType)) type: string,
    ): ReportResponseDto {
        const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENCE;
        return this.reportService.createReport(reportType, body); // Renamed method to createNewReport
    }

    @Put(':id')
    updateReport(
        @Param('type', new ParseEnumPipe(ReportType)) type: string,
        @Param('id', ParseUUIDPipe) id: string,
        @Body() body: updaterReportDto
    ) {
        const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENCE;
        return this.reportService.updateReport(reportType, id, body);
    }

    @HttpCode(204)
    @Delete(":id")
    deleteReport(
        @Param('id', ParseUUIDPipe) id: string,
        @Param("type", new ParseEnumPipe(ReportType)) type: string,
    ) {
        const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENCE;
        return this.reportService.deleteReport(reportType, id);
    }
}
