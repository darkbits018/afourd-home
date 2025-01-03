import { useMemo } from 'react';
import type { FormData } from '../../types/form';

export function useFormProgress(formData: FormData): number {
  return useMemo(() => {
    let completed = 0;
    let total = 0;

    // Basic Info
    total += 2; // Required fields: name, email
    if (formData.basicInfo.name) completed++;
    if (formData.basicInfo.email) completed++;

    // Style Preferences
    total += 1;
    if (formData.stylePreferences.styles.length > 0) completed++;

    // Clothing Types
    total += 1;
    if (formData.clothingTypes.types.length > 0) completed++;

    // Pricing
    total += 1;
    if (formData.pricingPreferences.priceRange) completed++;

    // Feedback
    total += 1;
    if (formData.feedback.designSuggestions) completed++;

    // Consent
    total += 1;
    if (formData.consent.cashbackConsent) completed++;

    return (completed / total) * 100;
  }, [formData]);
}