package net.youtubeCRUD.youtubeCRUD.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.youtubeCRUD.youtubeCRUD.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, String>{

}
