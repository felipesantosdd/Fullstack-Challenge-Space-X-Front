import Swal from "sweetalert2"

export function successAlert(message: string) {
    return (
        Swal.fire(
            {
                title: 'Sucesso!!',
                text: message,
                icon: 'success',
                background: '#252525',
                color: '#fff',
            }
        )
    )
}
export function errorAlert(message: string) {
    return (
        Swal.fire(
            {
                title: 'Algo deu errado!!',
                text: message,
                icon: 'error',
                background: '#252525',
                color: '#fff',
            }
        )
    )
}
