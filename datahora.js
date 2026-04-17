
data = new Date

diaSemana = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
mes = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')

document.write(diaSemana[data.getDay()] + ', ' + data.getDate() + ' de ' + mes[data.getMonth()] + ' de ' + data.getFullYear())