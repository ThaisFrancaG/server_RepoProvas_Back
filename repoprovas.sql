--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: disciplines; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.disciplines (
    id integer NOT NULL,
    name text NOT NULL,
    "termId" integer NOT NULL
);


ALTER TABLE public.disciplines OWNER TO postgres;

--
-- Name: disciplines_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.disciplines_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.disciplines_id_seq OWNER TO postgres;

--
-- Name: disciplines_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.disciplines_id_seq OWNED BY public.disciplines.id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text NOT NULL
);


ALTER TABLE public.sessions OWNER TO postgres;

--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sessions_id_seq OWNER TO postgres;

--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: teachers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teachers (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.teachers OWNER TO postgres;

--
-- Name: teachersDisciplines; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."teachersDisciplines" (
    id integer NOT NULL,
    "teacherId" integer NOT NULL,
    "disciplineId" integer NOT NULL
);


ALTER TABLE public."teachersDisciplines" OWNER TO postgres;

--
-- Name: teachersDisciplines_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."teachersDisciplines_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."teachersDisciplines_id_seq" OWNER TO postgres;

--
-- Name: teachersDisciplines_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."teachersDisciplines_id_seq" OWNED BY public."teachersDisciplines".id;


--
-- Name: teachers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.teachers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teachers_id_seq OWNER TO postgres;

--
-- Name: teachers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.teachers_id_seq OWNED BY public.teachers.id;


--
-- Name: terms; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.terms (
    id integer NOT NULL,
    number text NOT NULL
);


ALTER TABLE public.terms OWNER TO postgres;

--
-- Name: terms_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.terms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.terms_id_seq OWNER TO postgres;

--
-- Name: terms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.terms_id_seq OWNED BY public.terms.id;


--
-- Name: tests; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tests (
    id integer NOT NULL,
    name text NOT NULL,
    "pdfUrl" text NOT NULL,
    "categoryId" integer NOT NULL,
    "teacherDisciplineId" integer NOT NULL,
    views integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.tests OWNER TO postgres;

--
-- Name: tests_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tests_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tests_id_seq OWNER TO postgres;

--
-- Name: tests_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tests_id_seq OWNED BY public.tests.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: disciplines id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.disciplines ALTER COLUMN id SET DEFAULT nextval('public.disciplines_id_seq'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: teachers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teachers ALTER COLUMN id SET DEFAULT nextval('public.teachers_id_seq'::regclass);


--
-- Name: teachersDisciplines id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."teachersDisciplines" ALTER COLUMN id SET DEFAULT nextval('public."teachersDisciplines_id_seq"'::regclass);


--
-- Name: terms id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.terms ALTER COLUMN id SET DEFAULT nextval('public.terms_id_seq'::regclass);


--
-- Name: tests id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tests ALTER COLUMN id SET DEFAULT nextval('public.tests_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
d805134f-702d-4cd1-ba37-7cc29ef2652e	f9b86527f6f2d732355941f281a1eb85f249efd9280aaeaed18b8283397a85dd	2022-05-02 10:20:06.522177-03	20220422131512_init	\N	\N	2022-05-02 10:20:06.463555-03	1
b0df1a4f-6588-4571-9eb2-e500312d9842	09ecc0cb23b5f58e7921a3f314ed7df12428859cf2ae9f781b5ea6dd7829a207	2022-05-02 10:20:06.616882-03	20220423132434_fisr_mig	\N	\N	2022-05-02 10:20:06.545174-03	1
0db5460e-c381-4c97-a1bc-e59c1d1087c1	d93b8b90eae0a3940133578605b54cfdcf0715250fa24218117268f41206af97	2022-05-02 10:20:06.730018-03	20220423183257_minor_change	\N	\N	2022-05-02 10:20:06.643254-03	1
754f6b2a-83e8-4db3-96a0-6163eeae28e6	c509c107d30ef6f55f7cf596ed219fb9c00352c96dba5f30acc43e0d1178a65d	2022-05-02 10:20:07.027204-03	20220423232547_added_tables	\N	\N	2022-05-02 10:20:06.742717-03	1
4361669c-74bd-46e4-b08d-781568b38dad	ea3cd862c00ecec29c45cdde18965c520539f67a301696daf457511a1f798af5	2022-05-02 10:20:07.221967-03	20220424013031_fix_tables	\N	\N	2022-05-02 10:20:07.036987-03	1
68c0fe5c-2f69-4536-b78c-4f389296f3f8	0d7f0ad106148d55359fb2ecfb0bced51bd91974dcb8482edda551ca8611f365	2022-05-02 10:20:07.396362-03	20220424013124_fix_tables	\N	\N	2022-05-02 10:20:07.237604-03	1
2af567b2-0224-45fa-ac09-eef6ad232188	218572d4bacfe4098d36557529dea4abe0f8dd4840d611d44bf5f0e9a95e6798	2022-05-02 10:20:07.486895-03	20220424013254_fix_tables	\N	\N	2022-05-02 10:20:07.410367-03	1
54bbc2fa-df86-4e5a-ad2d-ed45122b8024	43456a9be03c02250258c02328b53917537d0229ab83b9b097fdbc69c17fedd8	2022-05-02 10:20:07.513192-03	20220430175113_add_views	\N	\N	2022-05-02 10:20:07.499021-03	1
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, name) FROM stdin;
1	P1
2	P2
3	P3
\.


--
-- Data for Name: disciplines; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.disciplines (id, name, "termId") FROM stdin;
1	DIREITO CONSTITUCINAL	1
2	DIREITO CONSTITUCIONAL	2
3	DIREITO ADMINISTRATIVO	2
4	DIREITO TRABALHISTA	3
5	DIREITO PENAL	3
6	LEGISLAÇÃO EXTRAVAGANTE	3
\.


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sessions (id, "userId", token) FROM stdin;
1	1	eyJhbGciOiJIUzI1NiJ9.dGhhaXNAZ21haWwuY29t.RYNPuYXoHd1Bb2RcPkxzRQexakuZsxD0ZbRzkzBOagk
\.


--
-- Data for Name: teachers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.teachers (id, name) FROM stdin;
1	Ana
2	Leandro
3	Antonio
4	Luana
\.


--
-- Data for Name: teachersDisciplines; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."teachersDisciplines" (id, "teacherId", "disciplineId") FROM stdin;
1	1	1
2	1	2
3	2	1
4	3	1
5	4	3
6	4	4
7	1	4
8	2	3
\.


--
-- Data for Name: terms; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.terms (id, number) FROM stdin;
1	1
2	2
3	3
4	4
\.


--
-- Data for Name: tests; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tests (id, name, "pdfUrl", "categoryId", "teacherDisciplineId", views) FROM stdin;
1	PROVA 1	https://www.nintendo.co.jp/clv/manuals/en/pdf/CLV-P-NAANE.pdf	1	1	0
2	SIMULADO CESPE	https://perso.crans.org/besson/publis/LaTeX-article-with-Pokemon-numbering.git/test.pdf	1	1	0
3	SIMULADO FGV	https://pt.scribd.com/document/311071908/Pokedex-Completa	2	1	0
4	CESPE 2022	https://www.parco.co.jp/pdf/en/store/storage/pokemon_cafe_pr_20160518.pdf	1	3	0
5	CESPE/CEBRASPE	https://play.nintendo.com/documents/Pokemon_Cafe_Mix_diorama.pdf	2	1	0
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password) FROM stdin;
1	thais@gmail.com	$2b$10$hKI96fz3UmA1aRjSYZ..3.Q5/SiiIRWBhvk0ceMS6vrEUP2iWE3/u
\.


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 3, true);


--
-- Name: disciplines_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.disciplines_id_seq', 6, true);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sessions_id_seq', 1, true);


--
-- Name: teachersDisciplines_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."teachersDisciplines_id_seq"', 8, true);


--
-- Name: teachers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.teachers_id_seq', 4, true);


--
-- Name: terms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.terms_id_seq', 4, true);


--
-- Name: tests_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tests_id_seq', 5, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: disciplines disciplines_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.disciplines
    ADD CONSTRAINT disciplines_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: teachersDisciplines teachersDisciplines_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."teachersDisciplines"
    ADD CONSTRAINT "teachersDisciplines_pkey" PRIMARY KEY (id);


--
-- Name: teachers teachers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_pkey PRIMARY KEY (id);


--
-- Name: terms terms_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.terms
    ADD CONSTRAINT terms_pkey PRIMARY KEY (id);


--
-- Name: tests tests_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT tests_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: categories_name_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX categories_name_key ON public.categories USING btree (name);


--
-- Name: disciplines_name_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX disciplines_name_key ON public.disciplines USING btree (name);


--
-- Name: sessions_token_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX sessions_token_key ON public.sessions USING btree (token);


--
-- Name: teachers_name_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX teachers_name_key ON public.teachers USING btree (name);


--
-- Name: terms_number_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX terms_number_key ON public.terms USING btree (number);


--
-- Name: users_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX users_email_key ON public.users USING btree (email);


--
-- Name: disciplines disciplines_termId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.disciplines
    ADD CONSTRAINT "disciplines_termId_fkey" FOREIGN KEY ("termId") REFERENCES public.terms(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: teachersDisciplines teachersDisciplines_disciplineId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."teachersDisciplines"
    ADD CONSTRAINT "teachersDisciplines_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES public.disciplines(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: teachersDisciplines teachersDisciplines_teacherId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."teachersDisciplines"
    ADD CONSTRAINT "teachersDisciplines_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES public.teachers(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: tests tests_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT "tests_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public.categories(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: tests tests_teacherDisciplineId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT "tests_teacherDisciplineId_fkey" FOREIGN KEY ("teacherDisciplineId") REFERENCES public."teachersDisciplines"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

