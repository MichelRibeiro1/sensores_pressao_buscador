const data = [["SENSOR DE PRESSÃO COM INSTALAÇÃO FRONTAL BSP0065", "0 até 5 bar", "4 a 20 mA ", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM INSTALAÇÃO FRONTAL BSP007U", "0 até 10 bar", "0 até 10 V", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM INSTALAÇÃO FRONTAL BSP007C", "0 até 5 bar", "4 a 20 mA ", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM INSTALAÇÃO FRONTAL BSP0066", "0 até 10 bar", "4 a 20 mA ", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM INSTALAÇÃO FRONTAL BSP0071", "0 até 10 bar", "4 a 20 mA ", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM INSTALAÇÃO FRONTAL BSP0072", "0 até 20 bar", "normalmente aberto/normalmente fechado", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM INSTALAÇÃO FRONTAL BSP006N", "0 até 50 bar", "normalmente aberto/normalmente fechado", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM INSTALAÇÃO FRONTAL BSP0073", "0 até 50 bar", "normalmente aberto/normalmente fechado", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM INSTALAÇÃO FRONTAL BSP007Z", "0 até 100 bar", "0 até 10 V", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM INSTALAÇÃO FRONTAL BSP0069", "0 até 100 bar", "4 a 20 mA ", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM INSTALAÇÃO FRONTAL BSP0068", "0 até 50 bar", "4 a 20 mA ", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM INSTALAÇÃO FRONTAL BSP005U", "0 até 20 bar", "normalmente aberto/normalmente fechado", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM INSTALAÇÃO FRONTAL BSP006A", "0 até 250 bar", "4 a 20 mA ", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM INSTALAÇÃO FRONTAL BSP005T", "0 até 10 bar", "normalmente aberto/normalmente fechado", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM INSTALAÇÃO FRONTAL BSP0060", "0 até 400 bar", "normalmente aberto/normalmente fechado", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM INSTALAÇÃO FRONTAL BSP0062", "-1 até 2 bar", "normalmente aberto/normalmente fechado", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM INSTALAÇÃO FRONTAL BSP0064", "0 até 2 bar", "normalmente aberto/normalmente fechado", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM INSTALAÇÃO FRONTAL BSP007A", "0 até 2 bar", "normalmente aberto/normalmente fechado", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM INSTALAÇÃO FRONTAL BSP006K", "0 até 5 bar", "0 até 10 V", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM INSTALAÇÃO FRONTAL BSP007T", "0 até 5 bar", "0 até 10 V", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM DISPLAY BSP00OT", "0 até 2 bar", "0 até 10 V", "-25...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM DISPLAY BSP000U", "0 até 5 bar", "0 até 10 V", "-25...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM DISPLAY BSP0015", "0 até 5 bar", "4 a 20 mA ", "-25...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM DISPLAY BSP000W", "0 até 10 bar", "0 até 10 V", "-25...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM DISPLAY BSP0095", "0 até 10 bar", "4 a 20 mA ", "-25...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM DISPLAY BSP002R", "0 até 10 bar", "4 a 20 mA ", "-25...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM DISPLAY BSP000Y", "0 até 20 bar", "0 até 10 V", "-25...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM DISPLAY BSP0018", "0 até 50 bar", "4 a 20 mA ", "-25...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM DISPLAY BSP0010", "0 até 100 bar", "0 até 10 V", "-25...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM DISPLAY BSP000N", "0 até 250 bar", "normalmente aberto/normalmente fechado", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM DISPLAY BSP008H", "0 até 250 bar", "normalmente aberto/normalmente fechado", "-25...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM DISPLAY BSP0012", "0 até 400 bar", "0 até 10 V", "-25...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM DISPLAY BSP008J", "0 até 400 bar", "normalmente aberto/normalmente fechado", "-25...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM DISPLAY BSP0013", "0 até 600 bar", "normalmente aberto/normalmente fechado", "-25...125 °C", "0.50%"], ["SENSOR DE PRESSÃO COM DISPLAY BSP002M", "0 até 600 bar", "normalmente aberto/normalmente fechado", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO SEM DISPLAY BSP0105", "-1 até 0 bar", "4 a 20 mA ", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO SEM DISPLAY BSP00H0", "0 até 5 bar", "4 a 20 mA ", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO SEM DISPLAY BSP00K0", "0 até 10 bar", "0 até 10 V", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO SEM DISPLAY BSP00HC", "0 até 10 bar", "4 a 20 mA ", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO SEM DISPLAY BSP00H2", "0 até 20 bar", "4 a 20 mA ", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO SEM DISPLAY BSP00H3", "0 até 50 bar", "4 a 20 mA ", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO SEM DISPLAY BSP00PT", "0 até 100 bar", "normalmente aberto/normalmente fechado", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO SEM DISPLAY BSP00FT", "0 até 100 bar", "4 a 20 mA ", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO SEM DISPLAY BSP00PU", "0 até 250 bar", "normalmente aberto/normalmente fechado", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO SEM DISPLAY BSP00JR", "0 até 400 bar", "0 até 10 V", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO SEM DISPLAY BSP00F3", "0 até 400 bar", "4 a 20 mA ", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO SEM DISPLAY BSP00JA", "0 até 400 bar", "4 a 20 mA ", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO SEM DISPLAY BSP00PJ", "-1 até 2 bar ", "normalmente aberto/normalmente fechado", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO SEM DISPLAY BSP00UE", "-1 até 10 bar", "normalmente aberto/normalmente fechado", "-40...125 °C", "0.50%"], ["SENSOR DE PRESSÃO SEM DISPLAY BSP00KF", "0 até 50 bar", "0 até 10 V", "-40...125 °C", "0.50%"]];

function fillTable() {
    const table = document.getElementById("table");
    let i = `
        <thead>
            <tr>
                <th scope="col">Nome</th>
                <th scope="col">Faixa de Medição</th>
                <th scope="col">Sinal de Saída</th>
                <th scope="col">Temperatura</th>
                <th scope="col">Precisão</th>
                <th scope="col">Datasheet</th>
            </tr>
        </thead>    
        `;
    data.forEach(l => {
        const row = `
            <tr>
                <td>${l[0]}</td>
                <td>${l[1]}</td>
                <td>${l[2]}</td>
                <td>${l[3]}</td>
                <td>${l[4]}</td>
                <td><a href="">Clique aqui</a></th>
            </tr>
        `;
        i += row
    });
    table.innerHTML = i
}

function filtrarSensores() {
    const [med, exatidao, temp, saida] = [
        document.getElementById("med").value,
        document.getElementById("exatidao").value,
        document.getElementById("temp").value,
        document.getElementById("saida").value,

    ];
    let i = `
        <tr>
            <th>Nome</th>
            <th>Faixa de Medição</th>
            <th>Sinal de Saída</th>
            <th>Temperatura</th>
            <th>Precisão</th>
            <th>Datasheet</th>
        </tr>`;
    const table = document.getElementById("table");
    table.innerHTML = '';
}
