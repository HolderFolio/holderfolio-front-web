import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  // const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();
  // const recipesArray = useSelector(selectRecipesArray);

  // const fetchRecipes = useCallback(async () => {
  //   setError(null);
  //   try {
  //     await dispatch(getAllRecipesAction());
  //   } catch (error) {
  //     setError(error?.response?.data?.message);
  //   }
  //   setIsLoading(false);
  // }, [dispatch]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetchRecipes().then(() => setIsLoading(false));
  // }, [fetchRecipes]);

  // if (error) {
  //   return <p>Une erreur est survenue : {error || "essayez de rafraichir la page ou de vous reconnecter."}</p>;
  // }

  return <div className="HomePage">Hello homepage</div>;
};

export default HomePage;
