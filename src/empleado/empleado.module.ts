import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmpleadoSchema } from './schema/empleado.schema';
import { EmpleadoService } from './empleado.service';
import { EmpleadoResolver } from './empleado.resolver';



@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'personal', schema: EmpleadoSchema, collection: "personal"}]),
      ],
    providers: [EmpleadoService, EmpleadoResolver],
})
export class EmpleadoModule {}
