import { useState } from "react";
import PropTypes from "prop-types";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { BASE_URL } from "@/config";

const initialValue = {
  id: 117,
  advice:
    "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
};

export const useAdvice = () => {
  const { getItem, setItem } = useLocalStorage("advice");
  const [currentAdvice, setCurrentAdviceAdvice] = useState(
    () => getItem() || initialValue
  );
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getNewAdvice = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/advice`, {
        method: "GET",
        cache: "no-store",
      });
      const data = await response.json();

      setItem(data?.slip);
      setCurrentAdviceAdvice(data?.slip);
    } catch (error) {
      setError(error);
      console.error("Error fetching advice:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    currentAdvice,
    getNewAdvice,
    isLoading,
    error,
  };
};

useAdvice.propTypes = {
  initialValue: PropTypes.shape({
    id: PropTypes.number.isRequired,
    advice: PropTypes.string.isRequired,
  }),
};
