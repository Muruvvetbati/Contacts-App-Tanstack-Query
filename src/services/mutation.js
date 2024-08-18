import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addNewContact, deleteContact } from './api';

export function useAddNewContactMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => addNewContact(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['contacts'] });
    }
  });
}

export function useDeleteContactMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteContact(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['contacts'] });
      await queryClient.invalidateQueries({ queryKey: ['contacts-by-id', id] });
    }
  });
}
