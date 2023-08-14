import { swalFire } from "../swal_fire.js"

export function check_file_extension(file)
{
    const extension = file[0].name.split('.')

    if ( extension[1] !== 'csv' ) 
    {
      swalFire('AVISO', 'Favor inserir um arquivo com extensão ".csv" para continuar.', 'warning', 'lightskyblue', 'lightskyblue', 'OK')
      return
    }
}