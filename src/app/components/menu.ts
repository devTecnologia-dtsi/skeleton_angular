import { ChangeDetectorRef } from "@angular/core";
import { MenuItem } from "../interfaces/menu.interface";
// import { PermisosUserComponent } from "../shared/permisos-user/permisos-user.component";

export class Menu {
    public static pages: MenuItem[] = [
        {
            group: 'Home',
            separator: true,
            icon: 'assets/icons/outline/home_icon.svg',
            items: [
                {
                    icon: 'assets/icons/outline/home_icon.svg',
                    label: 'Home',
                    route: '/dashboard',
                    active: true,
                    expanded: true
                },
                // {
                //     icon: 'assets/icons/outline/shield-check.svg',
                //     label: 'Gestionar',
                //     route: '/dashboard/acceso',
                //     active: false,
                // },
                {
                    icon: 'assets/icons/outline/chart_graph_icon.svg',
                    label: 'Reportes',
                    route: 'reportes',
                    active: true,
                },
            ],
            // selected: true
        },
        {
            group: 'Registro de inventario',
            separator: true,
            icon: 'assets/icons/outline/inventory.svg',
            items: [
                {
                    icon: 'assets/icons/outline/inventory.svg',
                    label: 'Inventario',
                    children: [
                        { label: '-  Software', icon: 'assets/icons/outline/software.svg', route: '/dashboard/inventario/solicitud' },
                        { label: '-  Laboratorio físico', icon: 'assets/icons/outline/inventory.svg', route: '/dashboard/inventario/consulta' }
                    ],
                },
            ],
        },
        {
            group: 'Biblioteca',
            separator: true,
            icon: 'assets/icons/outline/biblioteca.svg',
            items: [
                {
                    icon: 'assets/icons/outline/biblioteca.svg',
                    label: 'Biblioteca',
                    children: [
                        { label: 'Servicios', icon: 'assets/icons/outline/calendar-event-activity.svg', route: '/dashboard/biblioteca' },
                        { label: 'Prestamos', icon: 'assets/icons/outline/refresh.svg', route: '/dashboard/equipos' }
                    ],
                },
            ],
        },

        {
            group: 'Administración',
            separator: true,
            icon: 'assets/icons/outline/calendar-event-activity.svg',
            items: [
                {
                    icon: 'assets/icons/outline/calendar-event-activity.svg',
                    label: 'Administración',
                    children: [
                        { label: 'Usuarios', icon: 'assets/icons/outline/user_icon.svg', route: '/dashboard/biblioteca' },
                        { label: 'Recursos', icon: 'assets/icons/outline/refresh.svg', route: '/dashboard/equipos' }

                    ],
                },
            ],
            active: false,
            selected: false,
        },
    ];
}
