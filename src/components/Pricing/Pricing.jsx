import React from "react";
import { Check, ArrowRight } from "lucide-react";
import "./Pricing.scss";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "99",
      period: "month",
      description:
        "Perfect for small teams getting started with passwordless authentication",
      features: [
        "Up to 100 users",
        "Basic gesture recognition",
        "Standard support",
        "API access",
        "Mobile SDK",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Enterprise",
      price: "499",
      period: "month",
      description: "Advanced security features for growing organizations",
      features: [
        "Up to 1,000 users",
        "Advanced CNN models",
        "Priority support",
        "Custom integrations",
        "Compliance reporting",
        "Advanced analytics",
      ],
      cta: "Contact Sales",
      popular: true,
    },
    {
      name: "Custom",
      price: "Contact us",
      period: "",
      description:
        "Tailored solutions for large enterprises with specific requirements",
      features: [
        "Unlimited users",
        "Custom AI models",
        "24/7 dedicated support",
        "On-premise deployment",
        "Custom compliance",
        "White-label options",
      ],
      cta: "Get Quote",
      popular: false,
    },
  ];

  return (
    <section className='pricing section'>
      <div className='container'>
        <div className='pricing__header'>
          <h2>Simple, Transparent Pricing</h2>
          <p className='pricing__subtitle'>
            Choose the perfect plan for your organization's security needs. All
            plans include core gesture authentication features.
          </p>
        </div>

        <div className='pricing__grid'>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing__card ${
                plan.popular ? "pricing__card--popular" : ""
              }`}
            >
              {plan.popular && (
                <div className='pricing__badge'>Most Popular</div>
              )}

              <div className='pricing__header-card'>
                <h3 className='pricing__name'>{plan.name}</h3>
                <div className='pricing__price'>
                  {plan.price === "Contact us" ? (
                    <span className='pricing__price-custom'>Contact us</span>
                  ) : (
                    <>
                      <span className='pricing__currency'>$</span>
                      <span className='pricing__amount'>{plan.price}</span>
                      <span className='pricing__period'>/{plan.period}</span>
                    </>
                  )}
                </div>
                <p className='pricing__description'>{plan.description}</p>
              </div>

              <div className='pricing__features'>
                <ul className='pricing__features-list'>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className='pricing__feature'>
                      <Check className='pricing__check' />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`btn ${
                  plan.popular ? "btn-primary" : "btn-secondary"
                } btn-large pricing__cta`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
