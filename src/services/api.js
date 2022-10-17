import axios from "axios";
import { useEffect, useState } from "react";

export const api = axios.create({
    baseURL: 'https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json'
})
