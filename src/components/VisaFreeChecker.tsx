"use client"

import React, { useState, useEffect } from 'react';
import { Search, CheckCircle, XCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const VisaFreeChecker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResult, setSearchResult] = useState<boolean | null>(null);
  const [expandedRegions, setExpandedRegions] = useState<Record<string, boolean>>({});
  
  // Default number of rows to show (2 rows × 3 columns = 6 items)
  const DEFAULT_VISIBLE_ITEMS = 6;

  const regions = {
    'Europe 🌍': [
      { name: 'Austria', flag: '🇦🇹' },
      { name: 'Belgium', flag: '🇧🇪' },
      { name: 'Czech Republic', flag: '🇨🇿' },
      { name: 'Denmark', flag: '🇩🇰' },
      { name: 'Estonia', flag: '🇪🇪' },
      { name: 'Finland', flag: '🇫🇮' },
      { name: 'France', flag: '🇫🇷' },
      { name: 'Germany', flag: '🇩🇪' },
      { name: 'Greece', flag: '🇬🇷' },
      { name: 'Hungary', flag: '🇭🇺' },
      { name: 'Iceland', flag: '🇮🇸' },
      { name: 'Italy', flag: '🇮🇹' },
      { name: 'Latvia', flag: '🇱🇻' },
      { name: 'Lithuania', flag: '🇱🇹' },
      { name: 'Luxembourg', flag: '🇱🇺' },
      { name: 'Malta', flag: '🇲🇹' },
      { name: 'Netherlands', flag: '🇳🇱' },
      { name: 'Poland', flag: '🇵🇱' },
      { name: 'Portugal', flag: '🇵🇹' },
      { name: 'Slovakia', flag: '🇸🇰' },
      { name: 'Slovenia', flag: '🇸🇮' },
      { name: 'Spain', flag: '🇪🇸' },
      { name: 'Sweden', flag: '🇸🇪' },
      { name: 'Switzerland', flag: '🇨🇭' },
      { name: 'Monaco', flag: '🇲🇨' },
      { name: 'Russia', flag: '🇷🇺' },
      { name: 'United Kingdom', flag: '🇬🇧' },
      { name: 'Ireland', flag: '🇮🇪' },
      { name: 'Cyprus', flag: '🇨🇾' },
      { name: 'Bulgaria', flag: '🇧🇬' },
      { name: 'Romania', flag: '🇷🇴' },
      { name: 'Ukraine', flag: '🇺🇦' },
      { name: 'Serbia', flag: '🇷🇸' },
      { name: 'Croatia', flag: '🇭🇷' },
      { name: 'Bosnia and Herzegovina', flag: '🇧🇦' },
      { name: 'Montenegro', flag: '🇲🇪' },
      { name: 'North Macedonia', flag: '🇲🇰' },
      { name: 'Albania', flag: '🇦🇱' },
      { name: 'Belarus', flag: '🇧🇾' },
      { name: 'Norway', flag: '🇳🇴' }
    ],
    'Americas 🌎': [
      { name: 'United States', flag: '🇺🇸' },
      { name: 'Canada', flag: '🇨🇦' },
      { name: 'Brazil', flag: '🇧🇷' },
      { name: 'Mexico', flag: '🇲🇽' },
      { name: 'Argentina', flag: '🇦🇷' },
      { name: 'Chile', flag: '🇨🇱' }
    ],
    'Asia Pacific 🌏': [
      { name: 'Australia', flag: '🇦🇺' },
      { name: 'New Zealand', flag: '🇳🇿' },
      { name: 'South Korea', flag: '🇰🇷' },
      { name: 'Japan', flag: '🇯🇵' },
      { name: 'Singapore', flag: '🇸🇬' },
      { name: 'Brunei', flag: '🇧🇳' }
    ],
    'Middle East 🌍': [
      { name: 'United Arab Emirates', flag: '🇦🇪' },
      { name: 'Qatar', flag: '🇶🇦' }
    ]
  };

  const allCountries = Object.values(regions).flat();

  useEffect(() => {
    if (searchTerm.length > 2) {
      const matchedCountry = allCountries.find(country => 
        country.name.toLowerCase() === searchTerm.toLowerCase()
      );
      setSearchResult(matchedCountry ? true : false);
    } else {
      setSearchResult(null);
    }
  }, [searchTerm]);

  const toggleRegion = (region: string): void => {
    setExpandedRegions(prev => ({
      ...prev,
      [region]: !prev[region]
    }));
  };

  const getVisibleCountries = (countries: Array<{ name: string; flag: string }>, region: string): Array<{ name: string; flag: string }> => {
    if (searchTerm || expandedRegions[region]) {
      return countries;
    }
    return countries.slice(0, DEFAULT_VISIBLE_ITEMS);
  };

  const filteredRegions = Object.entries(regions).map(([region, countries]) => ({
    region,
    countries: countries.filter(country => 
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(group => group.countries.length > 0);

  const getHighlightedText = (text: string): JSX.Element => {
    if (!searchTerm) return <>{text}</>;
    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
    return (
        <>
            {parts.map((part, index) => 
                part.toLowerCase() === searchTerm.toLowerCase() ? 
                    <span key={index} className="bg-blue-200 dark:bg-blue-800">{part}</span> : part
            )}
        </>
    );
  };

  return (
    <Card className="w-full max-w-4xl my-3">
      <CardHeader>
        <CardTitle className="text-center">
          <span className="text-2xl">🌏 China 72/144-Hour Visa-Free Transit Policy 🌏</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Type Your country or region name..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {searchTerm.length > 2 && searchResult !== null && (
            <Alert className={searchResult ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}>
              {searchResult ? (
                <>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <AlertTitle className="text-green-800">Eligible for Visa-Free Transit</AlertTitle>
                  <AlertDescription className="text-green-700">
                    Good news! Your country or region is eligible for the 72/144-hour visa-free transit policy in China.
                  </AlertDescription>
                </>
              ) : (
                <>
                  <XCircle className="h-5 w-5 text-red-500" />
                  <AlertTitle className="text-red-800">Not Eligible</AlertTitle>
                  <AlertDescription className="text-red-700">
                    Sorry, Your country or region is not currently eligible for the 72/144-hour visa-free transit policy in China.
                  </AlertDescription>
                </>
              )}
            </Alert>
          )}

          {filteredRegions.map(({ region, countries }) => (
            <div key={region} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-center bg-gray-50 dark:bg-gray-800 py-2 rounded-lg">
                {region}
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {getVisibleCountries(countries, region).map((country) => (
                    <div
                      key={country.name}
                      className={`p-3 rounded-lg text-sm flex items-center space-x-2 transition-colors duration-200 
                        ${searchTerm && country.name.toLowerCase() === searchTerm.toLowerCase()
                          ? 'bg-green-100 dark:bg-green-800 border-2 border-green-500'
                          : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                    >
                      <span className="text-xl">{country.flag}</span>
                      <span>{getHighlightedText(country.name)}</span>
                      {searchTerm && country.name.toLowerCase() === searchTerm.toLowerCase() && (
                        <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
                      )}
                    </div>
                  ))}
                </div>
                
                {!searchTerm && countries.length > DEFAULT_VISIBLE_ITEMS && (
                  <button
                    onClick={() => toggleRegion(region)}
                    className="w-full py-2 px-4 text-sm text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2 transition-colors duration-200"
                  >
                    {expandedRegions[region] ? (
                      <>
                        <ChevronUp className="h-4 w-4" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4" />
                        Show {countries.length - DEFAULT_VISIBLE_ITEMS} More Countries
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}

          {searchTerm && !filteredRegions.length && (
            <div className="text-center py-8 text-gray-500">
              No countries found matching your search.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default VisaFreeChecker;