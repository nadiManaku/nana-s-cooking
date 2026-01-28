import { Recepie } from "@/types/types";


const BASE_URL = 'https://forkify-api.jonas.io/api/v2/recipes';

export async function searchRecepies(
  query: string,
  page = 1,
): Promise<Recepie[]> {
  const url = `${BASE_URL}?search=${encodeURIComponent(query)}`;

  const res = await fetch(url, {
    cache: 'no-store', // search should be fresh
  });

  if (!res.ok) {
    throw new Error('Failed to fetch recepies');
  }

  return res.json();
}

export async function getRecepie(id: string) {
  const res = await fetch(`https://forkify-api.jonas.io/api/v2/recipes/${id}`, {
    cache: 'no-store',
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch recepie details');
  }
  
  return res.json();
}