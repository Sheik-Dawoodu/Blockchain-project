import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContractService } from '../../service/contract.service';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [NgFor],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent implements OnInit{
  subscriptionId: any;
  subscriptionPlans: any;
  subscriptions: any[] = [];
  subscriptionTypes = ['Basic', 'Standard', 'Premium', 'Ultimate'];
  constructor(private contractServices:ContractService){}

  ngOnInit(): void {
    this.getAllSubscriptions()
  }

  async getAllSubscriptions() {
    try {
      const subscriptionPromises = [];

      // Loop through and create a promise for each index
      for (let index = 0; index < 4; index++) {
        subscriptionPromises.push(this.contractServices.getSubscription(index));
      }

      // Wait for all promises to resolve
      const subscriptionData = await Promise.all(subscriptionPromises);

      // Push the subscription data along with the subscription type
      this.subscriptions = subscriptionData.map((subscription, index) => ({
        type: this.subscriptionTypes[index], // Add the subscription type
        ...subscription // Spread the subscription data
      }));

      // Log each subscription for debugging purposes
      this.subscriptions.forEach((subscription, index) => {
        console.log(`Subscription ${index + 1}:`, subscription);
      });
    } catch (error) {
      console.error('Error fetching subscriptions:', error);
    }
  }
}