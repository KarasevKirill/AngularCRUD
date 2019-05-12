using Microsoft.EntityFrameworkCore;

namespace AngularCRUD.Models
{
    public class PaymentDetailContext : DbContext
    {
        public DbSet<PaymentDetail> PaymentDetails { get; set; }

        public PaymentDetailContext(DbContextOptions<PaymentDetailContext> options): base(options)
        {

        }
    }
}
