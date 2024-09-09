'use client'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// Define the type for category keys and data
type CategoryKey = 'civil-procedure-rules' | 'criminal-procedure-code' | 'family-law-regulations' | 'evidence-act' | 'employment-tribunal-rules';

interface CategoryData {
  title: string;
  description: string;
}

// Define the category data with a record type
const categoryData: Record<CategoryKey, CategoryData> = {
  'civil-procedure-rules': {
    title: 'Civil Procedure Rules',
    description: 'Comprehensive guidelines governing civil litigation procedures.',
  },
  'criminal-procedure-code': {
    title: 'Criminal Procedure Code',
    description: 'Detailed rules and regulations for criminal proceedings and trials.',
  },
  'family-law-regulations': {
    title: 'Family Law Regulations',
    description: 'Rules pertaining to family law matters, including divorce and custody.',
  },
  'evidence-act': {
    title: 'Evidence Act',
    description: 'Law governing the admissibility and relevance of evidence in court.',
  },
  'employment-tribunal-rules': {
    title: 'Employment Tribunal Rules',
    description: 'Procedural rules for handling disputes in employment tribunals.',
  },
};

const CategoryPage = () => {
  const { category } = useParams(); // Use useParams to access the dynamic segment
  const [content, setContent] = useState<CategoryData>({
    title: 'Loading...',
    description: '',
  });

  useEffect(() => {
    if (category && typeof category === 'string') {
      setContent(
        categoryData[category as CategoryKey] || { title: 'Not Found', description: 'This category does not exist.' }
      );
    }
  }, [category]);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-200">{content.title}</h1>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">{content.description}</p>
    </div>
  );
};

export default CategoryPage;
