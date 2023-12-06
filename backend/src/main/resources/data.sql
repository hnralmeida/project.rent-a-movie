INSERT INTO ACTOR(ACTOR_NAME) VALUES ('TESTE_ATOR1');
INSERT INTO ACTOR(ACTOR_NAME) VALUES ('TESTE_ATOR2');

INSERT INTO director(DIRECTOR_NAME) VALUES ('TESTE_DIRETOR1');
INSERT INTO director(DIRECTOR_NAME) VALUES ('TESTE_DIRETOR2');

INSERT INTO type(CLASS_VALUE, TYPE_NAME, RETURN_DATE) VALUES (1, 'TESTE_CLASSE1', 10);
INSERT INTO type(CLASS_VALUE, TYPE_NAME, RETURN_DATE) VALUES (2, 'TESTE_CLASSE2', 5);

INSERT INTO TITLE(TITLE_NAME, SYNOPSIS, CATEGORY, DIRECTOR_ID, TYPE_ID) VALUES ('FILME_1', 'SINOPSE DE FILME', 'CATEGORIA', 1, 1);
INSERT INTO TITLE(TITLE_NAME, SYNOPSIS, CATEGORY) VALUES ('THE GODFATHER', '123', 'CRIME');

INSERT INTO ITEM(SERIAL_NUMBER, ITEM_TYPE, TITLE_ID) VALUES (1234, 'TESTE_CATEGORIA', 1);

INSERT INTO TITLE_ACTOR_LIST(TITLE_ID, ACTOR_LIST_ID) VALUES (1, 1);

INSERT INTO CLIENT(SUB_NUMBER, NAME, BIRTH_DATE, GENDER, IS_ACTIVE) VALUES (1, 'AMANDA', CURRENT_DATE, 'FEMININO', TRUE);
INSERT INTO CLIENT(SUB_NUMBER, NAME, BIRTH_DATE, GENDER, IS_ACTIVE) VALUES (2, 'BETANIA', CURRENT_DATE, 'FEMININO', TRUE);
INSERT INTO CLIENT(SUB_NUMBER, NAME, BIRTH_DATE, GENDER, IS_ACTIVE) VALUES (3, 'ARI', CURRENT_DATE, 'MASCULINO', FALSE);
INSERT INTO CLIENT(SUB_NUMBER, NAME, BIRTH_DATE, GENDER, IS_ACTIVE) VALUES (4, 'ISA', CURRENT_DATE, 'FEMININO', FALSE);
INSERT INTO CLIENT(SUB_NUMBER, NAME, BIRTH_DATE, GENDER, IS_ACTIVE) VALUES (5, 'HENRICU', CURRENT_DATE, 'MASCULINO', TRUE);
INSERT INTO CLIENT(SUB_NUMBER, NAME, BIRTH_DATE, GENDER, IS_ACTIVE) VALUES (6, 'MURILO', CURRENT_DATE, 'MASCULINO', TRUE);

INSERT INTO PARTNER(ID, CPF, ADDRESS, PHONE) VALUES(1, '111222', 'CENTRO', '333');
INSERT INTO PARTNER(ID, CPF, ADDRESS, PHONE) VALUES(2, '222333', 'SANTA MARGARIDA', '222');

INSERT INTO DEPENDENT(ID, PARTNER_ID) VALUES(3,1);
INSERT INTO DEPENDENT(ID, PARTNER_ID) VALUES(4,1);
INSERT INTO DEPENDENT(ID, PARTNER_ID) VALUES(5,2);

INSERT INTO LEASE(UUID, DTA_LOCACAO, DTA_EXPECTED_RETURN, DTA_ACTUAL_RETURN, AMOUNT_CHARGED, FINE_CHARGED, IS_PAID) VALUES ('b35c602c-1ae8-4d97-aeba-0d5213601576', CURRENT_DATE, CURRENT_DATE, NULL, 0, 0, FALSE);