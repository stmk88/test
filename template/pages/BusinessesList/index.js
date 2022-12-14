import React from 'react'
import { BusinessesListing } from '../../../src/components/BusinessesListing'
import { useEvent } from 'ordering-components'
import { HelmetTags } from '../../components/HelmetTags'

export const BusinessesList = (props) => {
  const [events] = useEvent()
  const currentPageParam = window.location.search.split('page=')[1]
  const businessListingProps = {
    ...props,
    isSearchByName: true,
    isSearchByDescription: true,
    onBusinessClick: (business) => {
      events.emit('go_to_page', { page: 'business', params: { store: business.slug } })
    },
    currentPageParam: parseInt(currentPageParam),
    propsToFetch: ['city', 'id', 'name', 'header', 'logo', 'location', 'address', 'timezone', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']
  }

  return (
    <>
      <HelmetTags page='search' />
      <BusinessesListing {...businessListingProps} />
    </>
  )
}
