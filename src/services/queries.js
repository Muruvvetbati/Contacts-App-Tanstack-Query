import { useQuery } from '@tanstack/react-query';
import { getContacts, getContactById } from './api';

export function getAllContactsQuery() {
  return useQuery({ queryKey: 'contacts', queryFn: getContacts });
}

export function getContactDetailsByIdQuery(contactId) {
  return useQuery({
    queryKey: ['contacts-by-id', contactId],
    queryFn: () => getContactById(contactId),
  });
}