'use client';
import { useState } from 'react';
import Header from '@/components/Header/Header';
import ListOfRecepies from '@/components/ListOfRecepies/ListOfRecepies';
import RecepieComponent from '@/components/Recepie/Racepie';
import { getRecepie, searchRecepies } from "../../services/recepies";
import { Recipe, RecipeSearchResponse } from '@/types/types';
import '@/styles/main.scss';

export default function AppShell() {
    const [query, setQuery] = useState('');
    const [items, setItems] = useState<Recipe[]>([]);
    const [selectedItem, setSelectedItem] = useState<Recipe>({} as Recipe);
    const [loadingList, setLoading] = useState(false);
    const [loadingDetails, setLoadingDetails] = useState(false);
    const [error, setError] = useState(false);

     // const [id, setId] = useState<string | null>(null);

       
    async function searchItems(q: string) {
        setQuery(q);
        setLoading(true);
        setError(false);
       // setSelectedItem({} as Recepie);

        try {
            const res: any = await searchRecepies(q, 1);
            setItems(res.data.recipes);
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    async function selectItem(id: string) {
        try {
            setLoadingDetails(true);
            const data = await getRecepie(id);
            setSelectedItem(data.data.recipe);
        } catch {
            setError(true);
            setLoadingDetails(false);
        }
        setLoadingDetails(false);
    }


    return (
        <div className="container">
            <Header onSearch={searchItems} />
            <ListOfRecepies
                items={items}
                query={query}
                loading={loadingList}
                onSelect={selectItem} 
                selectedItemId={selectedItem.id}
                />
            <RecepieComponent
                resepieDetailsData={selectedItem}
                loading={loadingDetails} />
        </div>
    );
}
