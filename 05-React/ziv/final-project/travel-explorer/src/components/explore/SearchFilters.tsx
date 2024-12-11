import React from 'react';
import { Filter } from 'lucide-react';

interface SearchFiltersProps {
  filters: {
    season: string;
    budget: string;
    activity: string;
  };
  onFilterChange: (filters: any) => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({
  filters,
  onFilterChange,
}) => {
  const seasons = ['Spring', 'Summer', 'Autumn', 'Winter', 'Christmas Season'];
  const budgets = ['Low', 'Medium', 'High'];
  const activities = ['Cultural', 'Adventure', 'Relaxation', 'Food & Wine'];

  return (
    <div className="flex flex-wrap gap-4 items-center">
      <div className="flex items-center gap-2">
        <Filter className="w-5 h-5 text-gray-500" />
        <span className="text-sm font-medium text-gray-700">Filters:</span>
      </div>
      
      <select
        value={filters.season}
        onChange={(e) => onFilterChange({ ...filters, season: e.target.value })}
        className="px-3 py-1.5 rounded-md border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">All Seasons</option>
        {seasons.map(season => (
          <option key={season} value={season.toLowerCase()}>{season}</option>
        ))}
      </select>

      <select
        value={filters.budget}
        onChange={(e) => onFilterChange({ ...filters, budget: e.target.value })}
        className="px-3 py-1.5 rounded-md border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">All Budgets</option>
        {budgets.map(budget => (
          <option key={budget} value={budget.toLowerCase()}>{budget}</option>
        ))}
      </select>

      <select
        value={filters.activity}
        onChange={(e) => onFilterChange({ ...filters, activity: e.target.value })}
        className="px-3 py-1.5 rounded-md border border-gray-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">All Activities</option>
        {activities.map(activity => (
          <option key={activity} value={activity.toLowerCase()}>{activity}</option>
        ))}
      </select>
    </div>
  );
};