--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
-- Name: ipos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ipos (
    id integer NOT NULL,
    company_name text NOT NULL,
    issue_date date NOT NULL,
    price_band text NOT NULL,
    lot_size integer,
    description text
);


ALTER TABLE public.ipos OWNER TO postgres;

--
-- Name: ipos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ipos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ipos_id_seq OWNER TO postgres;

--
-- Name: ipos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ipos_id_seq OWNED BY public.ipos.id;


--
-- Name: ipos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ipos ALTER COLUMN id SET DEFAULT nextval('public.ipos_id_seq'::regclass);


--
-- Data for Name: ipos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ipos (id, company_name, issue_date, price_band, lot_size, description) FROM stdin;
\.


--
-- Name: ipos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ipos_id_seq', 1, false);


--
-- Name: ipos ipos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ipos
    ADD CONSTRAINT ipos_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

