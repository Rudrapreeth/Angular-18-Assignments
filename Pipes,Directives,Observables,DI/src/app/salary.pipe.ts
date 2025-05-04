import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryFormat'
})
export class SalaryPipe implements PipeTransform {

  transform(value: number): string {
    if (!value) return '₹0';
    return `₹${value.toLocaleString()}`;
  }

}
