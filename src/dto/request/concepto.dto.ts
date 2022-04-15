import { IsNotEmpty, IsString } from "class-validator";

export class conceptoDto{

    @IsString()
    @IsNotEmpty()
    nombreConcepto: string;

    @IsString()
    @IsNotEmpty()
    usuarioConcepto: string;
}