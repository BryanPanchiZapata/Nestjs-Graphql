import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { EmpleadoService } from './empleado.service';
import { Empleado } from './modelo/empleado.model';
import { EmpleadoDto } from './modelo/empleadoDto.model';

@Resolver((of) => Empleado)
export class EmpleadoResolver {
  constructor(private empleadoService: EmpleadoService) {}

  @Query((returns) => [Empleado])
  async empleados() {
    return await this.empleadoService.getEmpleados();
  }

  @Query((returns) => EmpleadoDto)
  async empleadoID(@Args('id') id: string, @Args('salario') salario: number) {
    return await this.empleadoService.getEmpleado(id, salario);
  }
}
