import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { EmpleadoDto } from './modelo/empleadoDto.model';
import { Empleado, EmpleadoDocument } from './schema/empleado.schema';

@Injectable()
export class EmpleadoService {
  constructor(
    @InjectModel('personal')
    private readonly empleadoModel: Model<EmpleadoDocument>,
  ) {}

  async getEmpleados(): Promise<Empleado[]> {
    return await this.empleadoModel.find();
  }

  async getEmpleado(id: string, salario: number) {
    const empleado = await this.empleadoModel.findById(id);
    const empleadoDto: EmpleadoDto = {};
    empleadoDto.name = empleado.name;
    empleadoDto.fecha = empleado.fecha;
    empleadoDto.decimo_tercero = empleado.salario-600/12;
    empleadoDto.decimo_cuarto = empleado.salario / 12;
    empleadoDto.fondo = empleado.salario * 8.33 / 100;
    empleadoDto.pago_iess = empleado.salario * 9.43 / 100;
    empleadoDto.total_pagar =
      empleado.salario +
      empleadoDto.decimo_tercero +
      empleadoDto.decimo_cuarto +
      empleadoDto.fondo;
    return empleadoDto;
  }

}
