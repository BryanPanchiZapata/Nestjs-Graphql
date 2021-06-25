import { Field, Float, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Empleado {
  @Field(() => ID, { nullable: true })
  id?: string;

  @Field({ nullable: true })
  name?: string;

  @Field((type) => Date, { nullable: true })
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
