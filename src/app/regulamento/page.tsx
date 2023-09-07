import styles from "./page.module.css";

export default function Regulamento() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.TitleRegulamento}>Regulamento</h1>
                <div className={styles.rulesContainer}>
                    <ol
                        className={`${styles.regulamento} ${styles.regulamentoOl}`}
                    >
                        <li
                            className={`${styles.regulamento} ${styles.regulamentoLi}`}
                        >
                            Lobby Personalizado
                            <ol
                                className={`${styles.regulamento} ${styles.regulamentoOl}`}
                            >
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Para cada jogo, o responsável de cada equipa
                                    irá convidar os respetivos líderes de
                                    equipas que irão jogar. Posteriormente os
                                    líderes deverão convidar os seus jogadores.
                                </li>
                                Definições do Lobby Personalizado
                                <br />
                                Modo: Padrão
                                <br />
                                Servidores: Madrid
                                <br />
                                Cheats: Off
                                <br />
                                Prorrogação - Vença por 2: On
                                <br />
                                Modo Torneio: On
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Todos os jogadores terão que estar presentes
                                    no lobby dentro do horário estipulado para o
                                    jogo (30 minutos de tolerância de atraso).
                                    Se os jogadores não estiverem presentes
                                    depois da tolerância, a equipa com todos os
                                    membros pode tirar uma captura de ecrã ao
                                    Lobby e reportar o resultado (Vitória por
                                    falta de comparência).
                                </li>
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Jogos serão transmitido ou gravados por
                                    algum observador da equipa VLRPT
                                </li>
                            </ol>
                        </li>
                        <li
                            className={`${styles.regulamento} ${styles.regulamentoLi}`}
                        >
                            Equipas e Roster
                            <ol
                                className={`${styles.regulamento} ${styles.regulamentoOl}`}
                            >
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Cada equipa terá que ter um mínimo de 5
                                    jogadores
                                </li>
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Cada Roster pode conter 5 jogadores e 2
                                    suplentes e 1 treinador
                                </li>
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Um jogador suplente pode ser adicionado
                                    antes ou depois de um jogo/mapa completo.
                                </li>
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    O suplente não pode pertencer a mais nenhuma
                                    equipa que esteja a participar ou que tenha
                                    sido eliminada no mesmo Torneio.
                                </li>
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Qualquer jogador do roster que não esteja a
                                    participar no jogo, pode preencher a vaga de
                                    treinador da equipa no lobby.
                                </li>
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Cada jogador só pode representar uma equipa
                                    no mesmo Torneio.
                                </li>
                            </ol>
                        </li>
                        <li
                            className={`${styles.regulamento} ${styles.regulamentoLi}`}
                        >
                            Exploits e Cheats
                            <ol
                                className={`${styles.regulamento} ${styles.regulamentoOl}`}
                            >
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Qualquer modificação de terceiros que crie
                                    uma injusta vantagem vai resultar na
                                    desqualificação imediata da equipa. Isto não
                                    sendo permitido:
                                </li>
                                Multihacks
                                <br />
                                Wallhack
                                <br />
                                Aimbot
                                <br />
                                Modelos Coloridos/Personalizados
                                <br />
                                Sem Flash/Recoil
                                <br />
                                Mudanças de Som
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Todos os cheats estão estritamente proibidos
                                    em qualquer circunstancia do Torneio. Se um
                                    utilizador for apanhado a usar qualquer tipo
                                    de cheats irá resultar em Ban e
                                    desqualificação da equipa. Os cheats
                                    incluídos são:
                                </li>
                                ESP
                                <br />
                                Aim hacks
                                <br />
                                Speed hacks
                                <br />
                                Wallhacks
                                <br />
                                Radar hacks
                                <br />
                                Hitbox manipulação
                                <br />
                                Teletransporte (qualquer tipo de transporte que
                                não seja disponível no jogo)
                                <br />
                                Uso de qualquer bug/bugs para ganhar vantagem
                                contra os seus oponentes.
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Caso seja constatado que um jogador está a
                                    usar qualquer tipo de programas de auxilio
                                    externo, poderão ser tomadas as seguintes
                                    medidas:
                                </li>
                                Aviso
                                <br />
                                Vitória para o adversário
                                <br />
                                Desqualificação
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Ferramentas de sobreposição de terceiros não
                                    são permitidas. Exemplos:
                                </li>
                                Overwolf (Trackers)
                                <br />
                                Blitz
                                <br />
                                Custom Crosshair
                            </ol>
                        </li>
                        <li
                            className={`${styles.regulamento} ${styles.regulamentoLi}`}
                        >
                            Pausas e Desconexões
                            <ol
                                className={`${styles.regulamento} ${styles.regulamentoOl}`}
                            >
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    As pausas técnicas são apenas para
                                    dificuldades técnicas ou desconexões durante
                                    o início da ronda (fase de compra).
                                </li>
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Na eventualidade de um jogador se
                                    desconectar a meio de uma ronda a ronda
                                    deverá continuar como normal. Quando a ronda
                                    acabar e a nova ronda começar o host pausa o
                                    lobby na fase de compra permitindo ao
                                    jogador/es se reconectarem, voltando ao
                                    lobby, a equipa com problemas de conexão
                                    devem informar à outra equipa que estão
                                    prontos para continuar.
                                </li>
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    As pausas técnicas tem uma duração de 10
                                    minutos (máximos). Caso seja necessário um
                                    tempo extra cabe ao observador da partida
                                    decidir se é justificável ou não. Quando
                                    ambas as equipas estiverem prontas para
                                    continuar devem usar o chat in-game para
                                    informar o observador (nunca o party voice
                                    chat). Usar a pausa técnica como pausa
                                    tática é proíbido.
                                </li>
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    As equipas podem pedir o Timeout in-game de
                                    2x um minuto de pausa. Só podem usar uma por
                                    cada lado. Isto é permitido para todas as
                                    fases do Torneio. (Não devem usar a pausa do
                                    timer ingame para pausas táticas)
                                </li>
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    No caso de Prorrogação, cada equipa irá ter
                                    o direito de mais uma pausa tática para usar
                                    na prorrogação.
                                </li>
                            </ol>
                        </li>
                        <li
                            className={`${styles.regulamento} ${styles.regulamentoLi}`}
                        >
                            Streaming
                            <ol
                                className={`${styles.regulamento} ${styles.regulamentoOl}`}
                            >
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Os jogadores podem fazer Live Stream dos
                                    seus POVs durante os qualificadores abertos,
                                    desde que cumprem os requisitos. Jogadores a
                                    fazer Streaming tem de ter a Live Stream sem
                                    som durante conversas no Discord com a
                                    Staff, incluindo encontros com os líderes
                                    antes do torneio começar. Treinadores,
                                    equipa staff e criadores de conteúdo não
                                    contam como jogadores competidores, e por
                                    tal não podem fazer stream.
                                </li>
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    É permitido realizar Watch party's do
                                    torneio através de uma stream de um
                                    observador.
                                </li>
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Todos os jogos das finais ao vivo do Torneio
                                    serão transmitidos nos canais próprios do
                                    Torneio. Apenas parceiros de produção
                                    aprovados e jogadores concorrentes poderão
                                    transmitir o evento principal.
                                </li>
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Os jogadores que transmitirem o evento serão
                                    obrigados a usar um Delay mínimo de 240
                                    segundos para manter a integridade
                                    competitiva. Qualquer pessoa que transmita o
                                    torneio deve desativar a configuração
                                    "mostrar sangue" e "mostrar corpos", de
                                    acordo com as diretrizes da Riot.
                                </li>
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Os jogadores que transmitirem o evento
                                    também devem incluir o logotipo do Torneio
                                    em sua sobreposição e utilizar o título do
                                    evento no título da transmissão.
                                    Infelizmente, as equipas incapazes de
                                    atender a essa solicitação não poderão
                                    transmitir.
                                </li>
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Para todos os indivíduos que desejam
                                    transmitir, solicitamos educadamente o
                                    relatório de todas as estatísticas após o
                                    evento.
                                </li>
                            </ol>
                        </li>
                        <li
                            className={`${styles.regulamento} ${styles.regulamentoLi}`}
                        >
                            Formato
                            <ol
                                className={`${styles.regulamento} ${styles.regulamentoOl}`}
                            >
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Divisão de equipas entre 2 ligas (
                                    「🏆」primeira-liga / 「🏆」segunda-liga )
                                    de 8 equipas
                                </li>
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Confrontos no formato Round Robin (todos
                                    jogam contra todos) com 1 volta
                                </li>
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Dependendo da posição na tabela da equipa no
                                    final da volta serão atribuídos pontos do
                                    circuito VLRPT que, posteriormente, darão a
                                    possibilidade de qualificar para um evento
                                    futuro
                                </li>
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    A despromoção e promoção de equipas da 1°
                                    para a 2° liga, e vice-versa, será feita
                                    através de uma final four entre o 7° e 8°
                                    lugar da 1° liga e o 1° e 2° da 2° liga
                                    (double elimination bracket)
                                </li>
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    A qualificação para as ligas poderá ser
                                    feita através de um qualificador realizado
                                    ao mesmo tempo que as ligas (single
                                    elimination bracket) no qual apenas as
                                    equipas campeã e vice-campeã poderão aceder
                                    a uma final four contra o 7° e 8° da 2° liga
                                </li>
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    A falta de comparência de 2 ou mais equipas
                                    das ligas custará no uso dos resultados
                                    atuais ( caso não se tenha terminado a
                                    primeira volta) ou os resultados da primeira
                                    volta (caso já tenha sido concluída)
                                </li>
                            </ol>
                        </li>
                        <li
                            className={`${styles.regulamento} ${styles.regulamentoLi}`}
                        >
                            Map Poll and veto
                            <ol
                                className={`${styles.regulamento} ${styles.regulamentoOl}`}
                            >
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Map poll atual:
                                </li>
                                Ascent
                                <br />
                                Fracture
                                <br />
                                Haven
                                <br />
                                Icebox
                                <br />
                                Lótus
                                <br />
                                Split
                                <br />
                                Pearl
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Processo do Veto:
                                </li>
                                (o processo de veto poderá alterar face a um
                                update de mapas no Valorant ou restrição da
                                Riot)
                                <br />
                                <br />
                                Em jogos à melhor de um (BO1):
                                <br />
                                <br />
                                Ban equipa A
                                <br />
                                Ban equipa B
                                <br />
                                Ban equipa A
                                <br />
                                Ban equipa B
                                <br />
                                Ban equipa A
                                <br />
                                Ban equipa B
                                <br />
                                Side pick equipa A
                                <br />
                                <br />
                                Em jogos à melhor de três (Bo3):
                                <br />
                                <br />
                                Ban equipa A
                                <br />
                                Ban equipa B
                                <br />
                                Map pick equipa A
                                <br />
                                Side pick equipa B
                                <br />
                                Map pick equipa B
                                <br />
                                Side pick equipa A
                                <br />
                                Ban equipa A
                                <br />
                                Ban equipa B
                                <br />
                                Side pick equipa A
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Novos agentes terão um período de
                                    experiência de quatro (4) semanas. Se o
                                    torneio começar durante este período de
                                    experiência, o agente será proibido pelo
                                    resto do torneio.
                                </li>
                            </ol>
                        </li>
                        <li
                            className={`${styles.regulamento} ${styles.regulamentoLi}`}
                        >
                            Conduta do Jogador
                            <ol
                                className={`${styles.regulamento} ${styles.regulamentoOl}`}
                            >
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Os jogadores devem tratar outros
                                    Competidores, Staff e Equipa de produção com
                                    respeito em qualquer altura.
                                </li>
                                <li
                                    className={`${styles.regulamento} ${styles.regulamentoLi}`}
                                >
                                    Nomes de equipas, nomes de jogadores,
                                    crosshairs e logotipos não devem ser
                                    ofensivos, tóxicos, inapropriado ou
                                    prejudiciais.
                                </li>
                                <br />
                                Para a aplicação de todas as regras ou raras
                                circunstâncias que possam estar fora das regras,
                                a decisão da Staff é final.
                            </ol>
                        </li>
                    </ol>
                </div>
            </div>
        </main>
    );
}
