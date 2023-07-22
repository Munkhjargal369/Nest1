import {Exclude} from 'class-transformer'
import {IsNumber, IsString, IsNotEmpty, IsPositive, IsOptional} from 'class-validator'
import { ReportType } from 'src/data';


export class CreateReportDto{
    @IsPositive()
    @IsNumber()
    amount: number;

    @IsString()
    @IsNotEmpty()
    source: string;
}

export class updaterReportDto{
    @IsOptional()   // orhij bolno
    @IsNumber()     // too esehiig shalgana
    @IsPositive()   // eyreg esehiig shalgana
    amount: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    source:string;
}

export class ReportResponseDto {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    @Exclude()  // update hiigdeh bolomjtoi bolno
    updated_at: Date;
    type: ReportType
/*
    @Expose({name: "createdAt"})
    transfromCreatedAt() {
        return this.created_at;
    }
*/

    constructor(partial : Partial<ReportResponseDto>){
        Object.assign(this, partial)
    }
}