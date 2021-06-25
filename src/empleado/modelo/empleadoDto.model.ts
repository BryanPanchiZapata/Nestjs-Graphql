import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class EmpleadoDto {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  fecha?: Date;

  @Field((type) => Float, { nullable: true })
  salario?: number;

  @Field((type) => Float, { nullable: true })
  pago_iess?: number;

  @Field((type) => Float, { nullable: true })
  decimo_tercero?: number;

  @Field((type) => Float, { nullable: true })
  decimo_cuarto?: number;

  @Field((type) => Float, { nullable: true })
  fondo?: number;

  @Field((type) => Float, { nullable: true })
   total_pagar?: number;
}