import classes from '@/app/meals/page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import Link from 'next/link';

export default async function MealsPage() {

    //as this component runs on the server, we can directly reach out to the database from here. Hence, we don't need to use fetch() or useEffect function.

    const meals = await getMeals();
    

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created{' '}
                    <span className={classes.highlight}>by you</span>
                </h1>

                <p>
                    Choose your favorite recipe and cook it yourself. It is easy
                </p>

                <p className={classes.cta}>
                    <Link href="/meals/share">
                    Share Your Favorite Recipe
                    </Link>
                </p>
            </header>

            <main className={classes.main}>
                <MealsGrid meals={meals} />
            </main>
        </>
    )
}