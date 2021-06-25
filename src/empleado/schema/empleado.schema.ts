import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type EmpleadoDocument = Empleado & Document;

@Schema()
export class Empleado {
  @Prop()
  name: string;
  @Prop()
  fecha?: Date;
  @Prop()
  salario?: number;
  @Prop()
  pago_iess?: number;
  @Prop()
  decimo_tercero?: number;
  @Prop()
  decimo_cuarto?: number;
  @Prop()
  fondo?: number;
  @Prop()
  total_pagar?: number;
}

export const EmpleadoSchema = SchemaFactory.createForClass(Empleado);
