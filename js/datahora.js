var data = new Date();
var diaSemana = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
var mes = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
document.write(diaSemana[data.getDay()] + ', ' + data.getDate() + ' de ' + mes[data.getMonth()] + ' de ' + data.getFullYear());
