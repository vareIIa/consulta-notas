<Card
                    elevation={10}
                    sx={{
                      fontFamily: "Rajdhani",
                      marginTop: "2vh",
                      marginBottom: "5vh",
                      display: "flex",
                      justifyContent: "center",
                      minHeight: "110vh",
                    }}
                  >
                    {/* Card principal e CardContent principal */}
                    <CardContent sx={{ fontFamily: "Rajdhani" }}>
                      <Box sx={{ marginTop: 5 }}>
                        <Box
                          sx={{
                            marginTop: 5,
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Logo />
                          {/* Uso a logo em componente */}
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              marginTop: 5,
                            }}
                          >
                            {/* o TextField é onde o usuário irá informar o email para ver os resultados. */}
                            <p>
                              Informe seu <strong>E-MAIL</strong> para ver todos
                              seus resultados!
                            </p>
                            
                            <Login/>

                            <TextField
                              id="email"
                              label=""
                              variant="outlined"
                              value={email}
                              // o onChange é para capturar o valor digitado no TextField.
                              onChange={(e) => setemail(e.target.value)}
                              style={{
                                marginRight: 5,
                                minWidth: "300px",
                                padding: 15,
                              }}
                            />

                            {/* // o Link é para redirecionar para a página de ajuda. */}
                            <a
                              style={{ marginTop: 10, marginBottom: 20 }}
                              target="_blank"
                              href="https://ajuda-projetodesenvolve.freshdesk.com/support/login"
                            >
                              Precisa de ajuda ver os resultados?
                            </a>

                            {/* // o Button é para chamar a função buscarDadosPorEMAIL. */}
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={() => {
                                buscarDadosPorEMAIL();
                              }}
                              style={{ padding: 15, minWidth: "150px"}}
                            >
                              Procurar
                            </Button>
                          </Box>
                        </Box>

                        <Box>
                          {/* // se o aluno for encontrado, irá mostrar os resultados. */}
                          {alunoEncontrado && (
                            // o Fade é para fazer uma animação de fade in.
                            <Fade in={true}>
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  padding: 2,
                                }}
                              >
                                <p>
                                  {/* // se o aluno for encontrado, irá mostrar "Resultados encontrados:". */}
                                  <strong>Resultados encontrados:</strong>
                                </p>
                              </Box>
                            </Fade>
                          )}
                          {/* Abaixo iremos encontrar todos os resultados disponiveis */}
                          {alunoEncontrado && (
                            <Fade in={true}>
                              <Box
                                sx={{
                                  display: "flex",
                                  direction: "row",
                                  minWidth: "500px",

                                  // isMobile eu usei pelo código pra formatar a tela no mobile.
                                  flexDirection: isMobile ? "column" : "auto",
                                  // O Primeiro valor é para o mobile e o segundo para o desktop.
                                  marginLeft: isMobile ? "26%" : "auto",
                                }}
                              >
                                <>
                                  <Card
                                    elevation={10}
                                    sx={{
                                      width: 220,
                                      padding: "2vh",
                                      marginBottom: 2,
                                      marginRight: 3,
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Box sx={{ marginTop: "20px" }}>
                                      {/* // o Card é para mostrar os resultados. */}
                                      <p>
                                        DESAFIO DO<strong> WEB SITE</strong>
                                      </p>
                                      <p>Nome: {alunoEncontrado.nome}</p>
                                      <p>
                                        Nota:{" "}
                                        {/* // se a nota for diferente de 0 e diferente de null, irá mostrar a nota. */}
                                        {alunoEncontrado.notaWEB !== 0 &&
                                        alunoEncontrado.notaWEB ? (
                                          alunoEncontrado.notaWEB
                                        ) : (
                                          // Aqui vamos puxar os dados do nosso arquivo JSON, O db.json

                                          // se a nota for 0 ou não encontrada, irá mostrar "Não encontrada".
                                          <strong>Não encontrada</strong>
                                        )}
                                      </p>

                                      {/* // o Link é para redirecionar para a página do aluno. */}
                                      <Link
                                        to={`/aluno3/${alunoEncontrado.login}`}
                                        style={{ textDecoration: "none" }}
                                      >
                                        {/* // o Button é para chamar a função handleButtonClickWEB. */}
                                        <Box sx={{ display:"flex", justifyContent:"center"}}>
                                        <Button
                                          variant="contained"
                                          color="primary"
                                          onClick={handleButtonClickWEB}
                                        >
                                          DETALHES DESAFIO
                                        </Button>
                                        </Box>
                                        {/* // o Link é para redirecionar para a página do desafio selecionado.*/}
                                      </Link>
                                      <Link
                                        to={`/aluno3/${alunoEncontrado.login}`}
                                        style={{ textDecoration: "none" }}
                                      ></Link>
                                    </Box>
                                  </Card>

                                  <Card
                                    elevation={10}
                                    sx={{
                                      width: 220,
                                      padding: "2vh",
                                      marginBottom: 2,
                                      marginRight: 3,
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Box sx={{ marginTop: "20px" }}>
                                      <p>
                                        DESAFIO DO<strong> PAC MAN</strong>
                                      </p>
                                      <p>Nome: {alunoEncontrado.nome}</p>
                                      <p>
                                        {/* // se a nota for diferente de 0 e diferente de null, irá mostrar a nota. */}
                                        Nota:{" "}
                                        {alunoEncontrado.notaPAC !== 0 &&
                                        alunoEncontrado.notaPAC ? (
                                          alunoEncontrado.notaPAC
                                        ) : (
                                          // se a nota for 0 ou não encontrada, irá mostrar "Não encontrada".

                                          <strong>Não encontrada</strong>
                                        )}
                                      </p>
                                      <Link
                                        // o Link é para redirecionar para a página do aluno.
                                        to={`/aluno/${alunoEncontrado.login}`}
                                        style={{ textDecoration: "none" }}
                                      >
                                        {/* // o Button é para chamar a função handleButtonClick. */}
                                        
                                        <Box sx={{ display:"flex", justifyContent:"center"}}>
                                        <Button
                                          variant="contained"
                                          color="primary"
                                          onClick={handleButtonClick}
                                        >
                                        
                                          DETALHES DESAFIO
                                        </Button>
                                        </Box>
                                      </Link>
                                      <Link
                                        to={`/aluno2/${alunoEncontrado.login}`}
                                        style={{ textDecoration: "none" }}
                                      ></Link>
                                      {/* // o Link é para redirecionar para a página do desafio selecionado. */}
                                    </Box>
                                  </Card>

                                  <Card
                                    elevation={10}
                                    sx={{
                                      width: 220,
                                      padding: "2vh",
                                      marginBottom: 2,
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Box sx={{ marginTop: "20px" }}>
                                      <p>
                                        DESAFIO DA <strong>COBRINHA</strong>
                                      </p>
                                      <p>Nome: {alunoEncontrado.nome}</p>
                                      <p>
                                        Nota:{" "}
                                        {/* // se a nota for diferente de 0 e diferente de null, irá mostrar a nota. */}
                                        {alunoEncontrado.notaCOB !== 0 &&
                                        alunoEncontrado.notaCOB ? (
                                          alunoEncontrado.notaCOB
                                        ) : (
                                          <strong>Não encontrada</strong>
                                          // se a nota for 0 ou não encontrada, irá mostrar "Não encontrada".
                                        )}
                                      </p>
                                      <Link
                                        to={`/aluno2/${alunoEncontrado.login}`}
                                        style={{ textDecoration: "none" }}
                                      >
                                        {/* // o Link é para redirecionar para a página do aluno. */}
                                        <Box sx={{ display:"flex", justifyContent:"center"}}>
                                        <Button
                                          variant="contained"
                                          color="primary"
                                          onClick={handleButtonClickCOB}
                                        >
                                          {/* // o Button é para chamar a função handleButtonClickCOB. */}
                                          DETALHES DESAFIO
                                        </Button>
                                        </Box>
                                      </Link>
                                      <Link
                                        to={`/aluno2/${alunoEncontrado.login}`}
                                        style={{ textDecoration: "none" }}
                                      ></Link>
                                    </Box>
                                  </Card>
                                </>
                              </Box>
                            </Fade>
                          )}
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>