import {ReportType , data} from 'src/data';
import { Injectable } from '@nestjs/common/';
import {v4 as uuid} from "uuid";
import { ReportResponseDto } from 'src/dtos/report.dto';

interface Report {amount:number, source:string}
 
@Injectable()
export class ReportService{
    getAllReport(type: ReportType) {
        return data.report.filter((report) => report.type === type);
    };

    getReportById(type:ReportType, id:string){
        const report = data.report
            .filter((report) => report.type === type)
            .find((report) => report.id === id)
        if(!report)
            return ;
        return new ReportResponseDto(report)
    };
    
    createReport(reportType: ReportType, rep: Report){

            const newReport = {
            id: uuid(), 
            source: rep.source,
            amount: rep.amount,
            created_at: new Date(),
            updated_at: new Date(),
            type: reportType,
            };
            data.report.push(newReport);
            return newReport;
    }
    updateReport(
        reportType:ReportType,
        id: string,
        rep: Report
    ){
    const newReport = data.report
        .filter((report)=> report.type === reportType)
        .find((report) => report.id === id)
    if(!newReport)
        return "not fount id and type";
    else{
        const reportIndex = data.report.findIndex((report) => report.id === newReport.id)

        data.report[reportIndex] = {
            ...data.report[reportIndex],
            ...rep,
            updated_at: new Date(),
        };
    }
    return 'updated';
    }
    deleteReport(
        reportType:ReportType,
        id: string,
    ){
    const newReport = data.report
        .filter((report) => report.type === reportType)
        .find((report) => report.id === id)
        if(!newReport)  
        return "failed"
    else{
        const reportIndex = data.report.findIndex((report) => report.id === newReport.id)
        data.report.splice(reportIndex, 1)
    }
    return "deleted" ;
    }
};